import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { arrayFill } from './mod.js'

Deno.test('arrayFill: tests', () => {
  assertEquals(arrayFill(Array(3), 1), [1, 1, 1])
  assertEquals(arrayFill(['', '', '', '', '', ''], 2, 2, 4), [
    '',
    '',
    2,
    2,
    '',
    '',
  ])
  assertEquals(arrayFill(['', '', '', '', '', ''], 2, 1), ['', 2, 2, 2, 2, 2])
})
