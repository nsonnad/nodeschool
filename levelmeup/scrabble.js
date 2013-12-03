module.exports = {

  init: function (db, words, callback) {
    var operations = words.map(function (word) {
      wordLength = word.length.toString();
      return { type: 'put', key: wordLength + '!' + word, value: word}  
    });

    db.batch(operations, function (err) {
      if (err)
        callback(err)
      callback();
    });
  },

  query: function (db, word, callback) {
    var results = [];
    var wordLength = word.length.toString();
    var wordBegin = word.replace(/\*/g, '');
    var wordQuery = wordLength + '!' + wordBegin;
    console.error(wordQuery);

    db.createReadStream({ start: wordQuery, end: wordQuery + '\xff' })
      .on('data', function (data) {
        results.push(data.value);
      })
      .on('error', function (err) {
        if (callback)
          callback(err);
        callback = null;
      })
      .on('end', function () {
        if (callback)
          callback(null, results);
        callback = null;
      })
  }
}

// official solution, quite similar

//module.exports.init = function (db, words, callback) {
  //var batch = words.map(function (word) {
    //// length-prefixed keys, separated by a '!' so we
    //// can query by length
    //var key = word.length + '!' + word
    //return { type: 'put', key: key, value: word }
  //})
  //db.batch(batch, callback)
//}

//module.exports.query = function (db, word, callback) {
  //var words = []
  //var key = word.length + '!' + word.replace(/\*/g, '')
  //db.createReadStream({ start: key, end: key + '\xff' })
    //.on('data', function (data) {
      //words.push(data.value)
    //})
    //.on('error', function (err) {
      //if (callback)
        //callback(err)
      //callback = null
    //})
    //.on('end', function () {
      //if (callback)
        //callback(null, words)
      //callback = null
    //})
//}
