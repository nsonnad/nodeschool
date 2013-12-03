module.exports = function (db, date, callback) {
  var nTweets = 0;  

  db.createReadStream({start: date})
    .on('data', function (data) {
      nTweets++;
    })
    .on('error', function (err) {
      callback(err);
    })
    .on('end', function () {
      callback(null, nTweets)
    })
}

//module.exports = function (db, date, callback) {
  //var tweets = 0
  //db.createReadStream({ start: date })
    //.on('data', function (data) {
      //tweets++
    //})
    //.on('error', function (err) {
      //if (callback) {
        //callback(err)
        //callback = null
      //}
    //})
    //.on('end', function () {
      //if (callback) {
        //callback(null, tweets)
        //callback = null
      //}
    //})
//}
