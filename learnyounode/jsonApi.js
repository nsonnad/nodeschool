var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  if (req.method == 'GET') {
    var m;
    var q;
    var parseDate;

    res.writeHead(200, { 'Content-Type': 'application/json' })
    var parsedUrl = url.parse(req.url);

    m = parsedUrl.query.match(/iso=(.*$)/)
    q = m ? m[1] : null
    parseDate = new Date(q);

    if (parsedUrl.pathname == '/api/parsetime') {
      var respObj = {
        hour: parseDate.getHours(),
        minute: parseDate.getMinutes(),
        second: parseDate.getSeconds()
      };

      var respJson = JSON.stringify(respObj);
      res.end(respJson);
    } else if (parsedUrl.pathname == '/api/unixtime') {
      var respObj = {
        "unixtime": parseDate.getTime()
      }
      res.end(JSON.stringify(respObj));
    } else {
      res.end('invalid query');
    }
  };

})

server.listen(8000)

// cleaner "official solution"....................

// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(8001)