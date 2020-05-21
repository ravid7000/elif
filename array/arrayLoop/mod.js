// @ts-nocheck

import { isArray } from '../isArray/mod.js'

function arrayLoop(input, callback) {
  if (isArray(input)) {
    if (typeof callback !== 'function') {
      return input
    }
    let len = input.length,
      i = 0,
      newArr = []
    while (i < len) {
      const result = callback(input[i], i)
      newArr[i] = result !== undefined ? result : input[i]
      i += 1
    }
    return newArr
  }
  return []
}

export { arrayLoop }
