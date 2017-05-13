'use strict'

const http = require('https');
const HOST = 'mackerel.io';
const SERVICE = 'TweetKindle'
const PATH = `/api/v0/services/${SERVICE}/tsdb`;

const timestamp = Math.floor(new Date().getTime() / 1000);

let postData = [
  {"name": "Sample.foo", "time": timestamp, "value": 30},
  {"name": "Sample.bar", "time": timestamp, "value": 100}
]

let postDataStr = JSON.stringify(postData);
console.log('postDataStr: ' + postDataStr);
let options = {
  host: HOST,
  port: 443,
  path: PATH,
  method: 'POST',
  headers: {
    'X-Api-Key': process.env.MACKEREL_APIKEY,
    'Content-Type': 'application/json',
    'Content-Length': postDataStr.length
  }
};

let req = http.request(options, (res) => {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', (e) => {
  console.log('problem with request: ' + e.message);
});

req.write(postDataStr);
req.end();
