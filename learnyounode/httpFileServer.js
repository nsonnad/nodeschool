var http  =   require('http');
var fs    =   require('fs');

var file = process.argv[2];
var stream = fs.createReadStream(file, {encoding: 'utf-8'});

var server = http.createServer(function (req, res) {
  stream.pipe(res)
});

server.listen(8000)


// OFFICIAL SOLUTION

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   fs.createReadStream(process.argv[2]).pipe(res)
// })

// server.listen(8000)