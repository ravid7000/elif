// @ts-nocheck

import { isArray } from '../isArray/mod.js'

function arrayFill(input, fillWith, fillFrom, fillTo) {
  if (!isArray(input)) {
    return []
  }
  let len = input.length,
    i = 0
  if (fillFrom) {
    i = fillFrom
  }
  if (fillTo) {
    len = fillTo
  }
  while (i < len) {
    input[i] = fillWith
    i += 1
  }
  return input
}

export { arrayFill }
