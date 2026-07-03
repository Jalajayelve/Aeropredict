# Server

This folder contains a small Express server that exposes a `/predict` endpoint for demo predictions.

Quick start:

```powershell
cd server
npm install
node index.js
# server will listen on http://localhost:5000
```

To run batch predictions from a CSV (basic parser):

```powershell
node batch_predict.js "..\test.csv"
```

CSV should have a header row with column names like `inflight_wifi,online_booking,seat_comfort,...` matching the form fields. The script is a simple parser and does not handle complex CSV quoting.
