var level = require('level');
var db = level(process.argv[2], { valueEncoding: 'json' });
var data = require(process.argv[3]);

var batch = db.batch();

db.on('ready', function (err) {
  if (err)
    console.error(err);
  
  data.forEach(function (d) {
    if (d.type == 'user')
      batch.put(d.name, JSON.stringify(d));
    batch.put(d.user + '!' + d.name, JSON.stringify(d));
  })
  batch.write();
})

// Official solution much more elegant here
// var level = require('level')
// var db = level(process.argv[2], { valueEncoding: 'json' })
// var data = require(process.argv[3])
// var operations = data.map(function (row) {
  // var key
  // if (row.type == 'user')
    // key = row.name
  // else if (row.type == 'repo')
    // key = row.user + '!' + row.name
  // return { type: 'put', key: key, value: row }
// })

// db.batch(operations)
