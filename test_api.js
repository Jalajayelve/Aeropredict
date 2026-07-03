const http = require('http');

const data = JSON.stringify({
  inflight_wifi: 1,
  online_booking: 1,
  seat_comfort: 1,
  inflight_entertainment: 1,
  onboard_service: 1,
  leg_room_service: 1,
  baggage_handling: 1,
  checkin_service: 1,
  inflight_service: 1,
  cleanliness: 1
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/predict',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`Body: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(data);
req.end();
