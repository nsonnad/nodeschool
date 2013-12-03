var level = require('level');
var data = JSON.parse(process.argv[3]);
var db = level(process.argv[2]);

for (var k in data) {
  if (data.hasOwnProperty(k)) {
    db.put(k, data[k], function(err) {
      if (err) 
        return console.error('Error in put():', err)
     console.error('put', k, data[k]) 
    })
  }
}

// Official solution
//  var level = require('level')
//  var db = level(process.argv[2])
//  var obj = JSON.parse(process.argv[3])
//
//  for (var key in obj) {
//    db.put(key, obj[key])
//  }
