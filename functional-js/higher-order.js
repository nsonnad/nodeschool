function repeat(operation, n) {
  if (n <= 0) return
  operation()
  return repeat(operation, --n)
}

module.exports = repeat
