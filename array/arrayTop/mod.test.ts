import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { arrayTop } from './mod.ts'

Deno.test('arrayTop: tests', () => {
  assertEquals(arrayTop([1, 2], 1), [1])
  assertEquals(arrayTop([1, 2, 3, 5], 3), [1, 2, 3])
  assertEquals(arrayTop([], 3), [])
  assertEquals(arrayTop('', 3), [])
  assertEquals(arrayTop({}, 3), [])
  assertEquals(arrayTop(null, 3), [])
  assertEquals(arrayTop([5, 6, 7]), [5])
  let input = [5, 6, 7]
  assertEquals(arrayTop(input, input.length), input)
})
