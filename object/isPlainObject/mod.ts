import { isArray } from '../../array/isArray/mod.ts'
import { isObject } from '../isObject/mod.ts'

function isPlainObject(input: any): boolean {
  return isObject(input) && !isArray(input)
}

export { isPlainObject }
