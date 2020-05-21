function isArray(input) {
  return Object.prototype.toString.call(input) === '[object Array]'
}

function arrayLoop(input, callback) {
  if (!isArray(input)) {
    return []
  }

  if (!arguments[1]) {
    return input
  }

  var len = input.length,
    i = 0,
    newArr = []
  while (i < len) {
    var result = callback(input[i], i)
    newArr[i] = result !== undefined ? result : input[i]
    i += 1
  }

  return newArr
}
