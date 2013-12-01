var level = require('level');
var fs = require('fs');
var data = fs.readFileSync(process.argv[3]).toString().split('\n')

var db = level(process.argv[2]);
var batch = db.batch();

db.on('ready', function (err) {
  if (err)
    console.error(err);

  data.forEach(function (d) {
    var arr = d.split(',');
    if (arr[0] == 'put') {
      batch.put(arr[1], arr[2]);
    } else if (arr[0] == 'del') {
      batch.del(arr[1]);
    }
  }) 
  batch.write(function() { console.log('done!'); })
})

/*
// Official solution
var fs = require('fs')
var level = require('level')

// read file and split into an array of lines
var data = fs.readFileSync(process.argv[3], 'utf8').split('\n')

level(process.argv[2], function (err, db) {
if (err)
    throw err

  // chained batch object
  var batch = db.batch()
  data.forEach(function (line) {
    var d = line.split(',')
    if (d[0] == 'del')
      return batch.del(d[1])
    batch.put(d[1], d[2])
  })
  // commit the batch
  batch.write()
})

Alternative method:

var operations = data.map(function (line) {
  var d = line.split(',')
  // 'value' is ignored for del
  return { type: d[0], key: d[1], value: d[2] }
})

db.batch(operations, function (err) {
  if (err)
    throw err
  db.close()
})

*/
