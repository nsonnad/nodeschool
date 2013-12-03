var net = require('net');
var multilevel = require('multilevel');

var db = multilevel.client();
var connection = net.connect(4545);
connection.pipe(db.createRpcStream()).pipe(connection);

db.get('multilevelmeup', function (err, value) {
  if (err)
    console.error(err);
  console.log(value);
  connection.end();
})

//official solution
//
//var multilevel = require('multilevel')
//var net = require('net')
//var db = multilevel.client()
//var con = net.connect(4545)
//con.pipe(db.createRpcStream()).pipe(con)

//db.get('multilevelmeup', function (err, value) {
  //if (err)
    //throw err
  //console.log(value)
  //con.end()
//})
