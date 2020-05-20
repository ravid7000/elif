/**
 * Iterate all elements of array
 */

import { isArray } from '../isArray/mod.ts'

function arrayLoop<T extends Array<unknown>>(
  input: T,
  callback?: (elm: T[0], index: number) => T[0] | undefined
): T {
  if (isArray(input) && typeof callback === 'function') {
    let len = input.length,
      i = 0,
      newArr: unknown[] = []
    while (i < len) {
      const result = callback(input[i], i)
      newArr[i] = result !== undefined ? result : input[i]
      i += 1
    }
    return newArr as T
  }
  return input
}

export { arrayLoop }
