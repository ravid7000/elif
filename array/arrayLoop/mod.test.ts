import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { arrayLoop } from './mod.ts'

Deno.test('arrayLoop: tests', () => {
  const input = [1, 2, 3, 4, 5]
  const results = arrayLoop(input, (elm) => {
    if (elm % 2 === 0) {
      return elm * 2
    }
  })
  assertEquals(results, [1, 4, 3, 8, 5])
  assertEquals(arrayLoop(input), input)
})
