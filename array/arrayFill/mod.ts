import { isArray } from '../isArray/mod.ts'

function arrayFill<T extends unknown[]>(
  input: T,
  fillWith: any,
  fillFrom?: number,
  fillTo?: number
): T {
  if (!isArray(input)) {
    const newArr: any = []
    return newArr
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
