var level = require('level');
var db = level(process.argv[2]);

db.createReadStream().on('data', function (data){
  process.stdout.write(data.key + '=' + data.value + '\n');
})

// Official solution is the same but, contrary to
// the directions, uses console.log() instead of stdout
