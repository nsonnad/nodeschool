module.exports = dirReader;

function dirReader(dir, ext, callback) {
  var fs = require('fs')
  var re = new RegExp('\\.' + ext + '$')

  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return re.test(file)
    });

    return callback(null, list)
  });
}