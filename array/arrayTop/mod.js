// @ts-nocheck

import { isArray } from '../isArray/mod.js'

function arrayTop(input, limit) {
  if (!arguments[1]) {
    limit = 1
  }
  if (isArray(input)) {
    return input.slice(0, limit)
  }
  return []
}

export { arrayTop }
