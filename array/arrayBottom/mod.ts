/**
 * Get array from bottom or last element in array
 */

import { isArray } from '../isArray/mod.ts'

function arrayBottom(input: any, limit = 1): Array<any> {
  if (isArray(input)) {
    return input.slice(input.length - limit)
  }
  return []
}

export { arrayBottom }
