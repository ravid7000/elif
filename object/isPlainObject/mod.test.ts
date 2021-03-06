import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { isPlainObject } from './mod.ts'

Deno.test('isPlainObject: tests', () => {
  assertEquals(isPlainObject({}), true)
  assertEquals(isPlainObject([]), false)
  assertEquals(isPlainObject(null), false)
  assertEquals(
    isPlainObject(function () {}),
    false
  )
})
