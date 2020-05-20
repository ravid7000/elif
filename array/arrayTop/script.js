function isArray(input) {
  return Object.prototype.toString.call(input) === '[object Array]'
}

function arrayTop(input, limit) {
  if (!arguments[1]) {
    limit = 1
  }
  if (isArray(input)) {
    return input.slice(0, limit)
  }
  return []
}
