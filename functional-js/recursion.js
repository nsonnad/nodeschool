function reduce (arr, func, init) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) {
      console.log(value)
      return value
    }
    return reduceOne(index + 1, func(value, arr[index], index, arr))
  })(0, init)
}

module.exports = reduce;
