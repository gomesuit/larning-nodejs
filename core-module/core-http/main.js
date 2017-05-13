'use strict'

const http = require('http');
const HOST = 'requestb.in';
const PATH = '/1jxev3n1';

let postData = {
  "name": "n0bisuke",
  "comment": "nemui"
};

let postDataStr = JSON.stringify(postData);
let options = {
  host: HOST,
  port: 80,
  path: PATH,
  method: 'POST',
  headers: {
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
