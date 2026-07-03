import sys
import json
import joblib

try:
    payload = json.load(sys.stdin)
except Exception as e:
    print(json.dumps({'error':'invalid input','details':str(e)}))
    sys.exit(1)

# Load model and optional label encoder
try:
    model = joblib.load('model.joblib')
except Exception as e:
    print(json.dumps({'error':'model_load_failed','details':str(e)}))
    sys.exit(2)

le = None
try:
    le = joblib.load('label_encoder.joblib')
except Exception:
    # It's okay if label encoder is missing; we'll try to use model.classes_ or raw model output
    le = None

# Build feature vector expected by the model
features = [
    'inflight_wifi','online_booking','seat_comfort','inflight_entertainment',
    'onboard_service','leg_room_service','baggage_handling','checkin_service',
    'inflight_service','cleanliness'
]

X = []
for f in features:
    X.append(float(payload.get(f,0)))

# Predict
try:
    pred = model.predict([X])[0]

    # Determine label string
    pred_label = None
    try:
        if le is not None:
            # If label encoder exists, inverse transform numeric labels
            pred_label = le.inverse_transform([pred])[0]
        else:
            # If no label encoder, if model returns numpy types convert to native
            try:
                # many sklearn models return native labels (strings or numbers)
                pred_label = pred.tolist() if hasattr(pred, 'tolist') else pred
            except Exception:
                pred_label = str(pred)
    except Exception:
        # Fallback: try to use model.classes_ if available
        try:
            if hasattr(model, 'classes_'):
                classes = list(model.classes_)
                # if pred looks like an index, map to classes
                if isinstance(pred, (int, float)) and int(pred) < len(classes):
                    pred_label = classes[int(pred)]
                else:
                    pred_label = str(pred)
            else:
                pred_label = str(pred)
        except Exception:
            pred_label = str(pred)

    # Confidence: try predict_proba if available
    conf = None
    if hasattr(model, 'predict_proba'):
        try:
            probs = model.predict_proba([X])[0]
            conf = int(max(probs) * 100)
        except Exception:
            conf = 75
    else:
        conf = 75

    print(json.dumps({'prediction': pred_label, 'confidence': conf}))
except Exception as e:
    print(json.dumps({'error':'prediction_failed','details':str(e)}))
    sys.exit(3)
