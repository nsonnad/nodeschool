var dirModule = require('./dirModule')

dirModule(process.argv[2], process.argv[3], function (err, data) {
  if (err)
    console.log('there was an error')
  
  for (var i = 0; i <= data.length - 1; i++) {
    console.log(data[i])
  };
})