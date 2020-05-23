// @ts-nocheck

import { isArray } from '../../array/isArray/mod.js'
import { isObject } from '../isObject/mod.js'

function isPlainObject(input) {
  return isObject(input) && !isArray(input)
}

export { isPlainObject }
