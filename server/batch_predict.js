const fs = require('fs');
const http = require('http');

if (process.argv.length < 3) {
  console.error('Usage: node batch_predict.js <path-to-csv>');
  process.exit(1);
}

const csvPath = process.argv[2];
const csv = fs.readFileSync(csvPath, 'utf8');

// Very small CSV parser (assumes no quoted commas)
const lines = csv.split(/\r?\n/).filter(Boolean);
if (lines.length < 2) {
  console.error('CSV has no data');
  process.exit(1);
}

const headers = lines[0].split(',').map(h => h.trim());
const rows = lines.slice(1).map(line => line.split(',').map(c => c.trim()));

function toPayload(cols) {
  const obj = {};
  headers.forEach((h, i) => {
    // normalize header names expected by API
    let key = h
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_]/g, '');
    obj[key] = cols[i];
  });
  // convert numeric fields
  ['inflight_wifi','online_booking','seat_comfort','inflight_entertainment','onboard_service','leg_room_service','baggage_handling','checkin_service','inflight_service','cleanliness','flight_distance','age'].forEach(k => {
    if (obj[k] !== undefined) obj[k] = Number(obj[k]) || 0;
  });
  return obj;
}

async function post(payload) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const options = {
      hostname: 'localhost',
      port: 5000,
      path: '/predict',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          resolve(parsed);
        } catch (e) {
          resolve({ error: 'Invalid JSON', body });
        }
      });
    });

    req.on('error', (err) => reject(err));
    req.write(data);
    req.end();
  });
}

(async () => {
  console.log(`Sending ${rows.length} rows from ${csvPath} to http://localhost:5000/predict`);
  for (let i = 0; i < rows.length; i++) {
    const payload = toPayload(rows[i]);
    try {
      const resp = await post(payload);
      console.log(`Row ${i + 1}:`, resp);
    } catch (err) {
      console.error(`Row ${i + 1} error:`, err.message || err);
    }
  }
  console.log('Done');
})();
