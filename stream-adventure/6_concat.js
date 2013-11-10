var concat = require('concat-stream')
var through = require('through')

process.stdin
  .pipe(concat(function (input) {
    var rev = input.toString().split('').reverse().join('')
    process.stdout.write(rev + '\n')
  }))
