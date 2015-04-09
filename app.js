// Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
// Solution: Use Node.js to perform the profile look ups and server our template via HTTP

var router = require('./router.js');
var renderer = require('./renderer.js');

// 1. Create a web server
var http = require('http');
http.createServer(function (request, response) {
  'use strict';
  router.home(request, response);
  router.user(request, response);
}).listen(3000, '127.0.0.1');
console.log('Server running at http://<workspace-url>/');

