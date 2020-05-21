// @ts-nocheck

import { isArray } from '../isArray/mod.js'

function arrayBottom(input, limit) {
  if (!arguments[1]) {
    limit = 1
  }
  if (isArray(input)) {
    return input.slice(input.length - limit)
  }
  return []
}

export { arrayBottom }
