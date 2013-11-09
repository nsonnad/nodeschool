var sum = 0;

for (var i = process.argv.length - 1; i > 1; i--) {
  sum += +process.argv[i]
};

console.log(sum)