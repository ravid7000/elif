import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { arrayBottom } from './mod.js'

Deno.test('arrayBottom: tests', () => {
  assertEquals(arrayBottom([1, 2], 1), [2])
  assertEquals(arrayBottom([1, 2, 3, 5], 3), [2, 3, 5])
  assertEquals(arrayBottom([], 3), [])
  assertEquals(arrayBottom('', 3), [])
  assertEquals(arrayBottom({}, 3), [])
  assertEquals(arrayBottom(null, 3), [])
  assertEquals(arrayBottom([5, 6, 7]), [7])
  let input = [5, 6, 7]
  assertEquals(arrayBottom(input, input.length), input)
})
