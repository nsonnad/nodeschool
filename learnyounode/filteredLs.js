var fs = require('fs');
var path = process.argv[2];
var extension = process.argv[3];

var pattern = new RegExp('\\.' + extension + '$')

fs.readdir(path, function (err, list) {
  list.forEach(function (file) {
    if (pattern.test(file)) {
      console.log(file)
    };
  })  
});