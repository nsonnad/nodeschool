var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function (resp) {
  resp.setEncoding('utf-8')
  resp.pipe(bl(function (err, data) {
    respString = data.toString()
    console.log(respString.length)
    console.log(respString)
  }))
})