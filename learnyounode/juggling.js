var http = require('http')
var urls = [process.argv[2], process.argv[3], process.argv[4]]

var count = 0;

function getResp(url) {
  http.get(url, function (resp) {
    var allData = '';

    resp.setEncoding('utf-8')
    resp.on('data', function (data) {
      allData += data;
    });

    resp.on('end', function () {
      console.log(allData)
      if (count < urls.length - 1) {
        count += 1;
        getResp(urls[count])
      } 
    })
  });
}

getResp(urls[0])

// OFFICIAL SOLUTION
// var http = require('http')
//   var bl = require('bl')
//   var results = []
//   var count = 0

//   function printResults () {
//     for (var i = 0; i < 3; i++)
//       console.log(results[i])
//   }

//   function httpGet (index) {
//     http.get(process.argv[2 + index], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err)
//           return console.error(data)

//         results[index] = data.toString()
//         count++

//         if (count == 3) // yay! we are the last one!
//           printResults()
//       }))
//     })
//   }

//   for (var i = 0; i < 3; i++)
//     httpGet(i)
