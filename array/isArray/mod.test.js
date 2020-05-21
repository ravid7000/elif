import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { isArray } from './mod.js'

Deno.test('isArray: test', () => {
  assertEquals(isArray([1, 2]), true)
  assertEquals(isArray([]), true)
  assertEquals(isArray({}), false)
  assertEquals(isArray('input'), false)
  assertEquals(isArray(10), false)
  assertEquals(isArray(true), false)
  assertEquals(isArray(undefined), false)
  assertEquals(isArray(null), false)
})
