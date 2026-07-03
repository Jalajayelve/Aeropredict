const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Simple CORS middleware so the frontend (vite dev server) can call /predict
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Helpful root route so visiting http://localhost:5000/ doesn't show "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Prediction server is running. POST JSON to /predict to get results.');
});

const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');

// If a Python sklearn model exists, call the Python predictor; otherwise use rule-based
const PY_MODEL_PATH = __dirname + '/model.joblib';

// Simple rule-based model for demo purposes
function predictFromPayload(payload) {
  // compute average of rating-like fields
  const ratings = [
    payload.inflight_wifi,
    payload.online_booking,
    payload.seat_comfort,
    payload.inflight_entertainment,
    payload.onboard_service,
    payload.leg_room_service,
    payload.baggage_handling,
    payload.checkin_service,
    payload.inflight_service,
    payload.cleanliness,
  ].map((v) => Number(v) || 0);

  const avg = ratings.reduce((a, b) => a + b, 0) / (ratings.length || 1);

  let prediction = 'neutral';
  let confidence = 60;
  if (avg >= 4) {
    prediction = 'satisfied';
    confidence = 85 + Math.round(Math.random() * 10);
  } else if (avg >= 2.5) {
    prediction = 'neutral';
    confidence = 65 + Math.round(Math.random() * 10);
  } else {
    prediction = 'dissatisfied';
    confidence = 80 + Math.round(Math.random() * 10);
  }

  return { prediction, confidence };
}

app.post('/predict', (req, res) => {
  const payload = req.body;
  if (!payload) return res.status(400).json({ error: 'No payload' });

  // If Python model is present, delegate to python_predict.py
  if (fs.existsSync(PY_MODEL_PATH)) {
    try {
      const py = spawn('python', [__dirname + '/python_predict.py']);
      let stdout = '';
      let stderr = '';
      py.stdout.on('data', (d) => (stdout += d.toString()));
      py.stderr.on('data', (d) => (stderr += d.toString()));
      py.on('close', (code) => {
        if (code !== 0) {
          console.error('python_predict.py failed:', stderr);
          // fallback to rule-based
          const out = predictFromPayload(payload);
          return res.json(out);
        }
        try {
          const parsed = JSON.parse(stdout);
          return res.json(parsed);
        } catch (e) {
          console.error('Invalid JSON from python predictor', e, stdout);
          const out = predictFromPayload(payload);
          return res.json(out);
        }
      });
      // write payload to python stdin
      py.stdin.write(JSON.stringify(payload));
      py.stdin.end();
    } catch (err) {
      console.error('Failed to spawn python predictor', err);
      const out = predictFromPayload(payload);
      return res.json(out);
    }
  } else {
    const out = predictFromPayload(payload);
    return res.json(out);
  }
});

// Simple persistence for predictions in a JSON file so dashboard can load history
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'predictions.json');

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

function readPredictions() {
  try {
    ensureDataFile();
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (e) {
    console.error('Failed to read predictions file', e);
    return [];
  }
}

function writePredictions(arr) {
  try {
    ensureDataFile();
    fs.writeFileSync(DATA_FILE, JSON.stringify(arr, null, 2));
    return true;
  } catch (e) {
    console.error('Failed to write predictions file', e);
    return false;
  }
}

// POST /predictions - save a prediction record (backend generates id/timestamp)
app.post('/predictions', (req, res) => {
  const body = req.body;
  if (!body || !body.name) return res.status(400).json({ error: 'invalid body' });

  const predictions = readPredictions();
  const record = {
    id: Date.now().toString(),
    name: body.name || 'anonymous',
    airline: body.airline || '',
    prediction: body.prediction || 'neutral',
    confidence: Number(body.confidence) || 0,
    timestamp: new Date().toLocaleString(),
  };
  predictions.push(record);
  const ok = writePredictions(predictions);
  if (!ok) return res.status(500).json({ error: 'failed to save' });
  return res.json(record);
});

// GET /predictions - return saved predictions
app.get('/predictions', (req, res) => {
  const predictions = readPredictions();
  return res.json(predictions);
});

app.listen(port, () => {
  console.log(`Prediction server listening at http://localhost:${port}`);
});
