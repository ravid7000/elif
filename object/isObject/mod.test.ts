import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { isObject } from './mod.ts'

Deno.test('isObject: tests', () => {
  assertEquals(isObject({}), true)
  assertEquals(isObject([]), true)
  assertEquals(isObject(null), false)
  assertEquals(
    isObject(function () {}),
    false
  )
  assertEquals(isObject(''), false)
  assertEquals(isObject(undefined), false)
})
