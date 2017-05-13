'use strict'

const http = require('https');
const HOST = 'requestb.in';
const PATH = '/1jxev3n1';

const timestamp = new Date().getTime();

let postData = [
  {"name": "Sample.foo", "time": timestamp, "value": 30},
  {"name": "Sample.bar", "time": timestamp, "value": 100}
]

let postDataStr = JSON.stringify(postData);
let options = {
  host: HOST,
  port: 443,
  path: PATH,
  method: 'POST',
  headers: {
    'X-Api-Key': 'aaaaaaaaaaaaaaaaaaa',
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
