var split = require('split')
var through = require('through')
var tr = through(write, end)

var i = 1;

function write(line) {
    if (i % 2 != 0) {
      this.queue(line.toString().toLowerCase() + '\n')
      i += 1;
    } else {
      this.queue(line.toString().toUpperCase() + '\n')
      i += 1;
    };
  }

function end() { this.queue(null); }

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout)

// OFFICIAL SOLUTION:
// 
// var through = require('through');
// var split = require('split');

// var lineCount = 0;
// var tr = through(function (buf) {
//     var line = buf.toString();
//     this.queue(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
// });
// process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);