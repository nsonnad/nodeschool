var level = require('level');
var sub = require('level-sublevel');
var db = sub(level(process.argv[2]));

var robots = db.sublevel('robots')
var dinosaurs = db.sublevel('dinosaurs')

robots.put('slogan', 'beep boop', function (err) {
  if (err)
    console.error(err)
  console.error('put robots') 
})

dinosaurs.put('slogan', 'rawr', function (err) {
  if (err)
    console.error(err)
  console.error('put dinosaurs') 
})

//official solution is basically the same
//but without error handling
//
//var level = require('level')
//var sub = require('level-sublevel')
//var db = sub(level(process.argv[2]))

//var robots = db.sublevel('robots');
//robots.put('slogan', 'beep boop');

//var dinosaurs = db.sublevel('dinosaurs');
//dinosaurs.put('slogan', 'rawr');
