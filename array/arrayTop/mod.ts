/**
 * Get top elements from array to specified limit or get first
 */

import { isArray } from '../isArray/mod.ts'

function arrayTop(input: any, limit = 1): Array<any> {
  if (isArray(input)) {
    return input.slice(0, limit) as Array<any>
  }
  return []
}

export { arrayTop }
