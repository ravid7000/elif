/**
 * Test Case
 * With array: []
 * With object: {}
 * With string: ''
 * With number: 10
 * With boolean: false
 * With undefined: undefined
 * With null: null
 * With function: Function
 */

import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { isArray } from './mod.ts'

Deno.test('isArray: should return true for input array', () => {
  const input = [1, 2]
  assertEquals(isArray(input), true)
})

Deno.test('isArray: should return true for input empty array', () => {
  const input: string[] = []
  assertEquals(isArray(input), true)
})

Deno.test('isArray: should return false for input object', () => {
  const input = { a: 1 }
  assertEquals(isArray(input), false)
})

Deno.test('isArray: should return false for input string', () => {
  const input = ''
  assertEquals(isArray(input), false)
})

Deno.test('isArray: should return false for input number', () => {
  const input = 10
  assertEquals(isArray(input), false)
})

Deno.test('isArray: should return false for input boolean', () => {
  const input = false
  assertEquals(isArray(input), false)
})

Deno.test('isArray: should return false for input undefined', () => {
  const input = undefined
  assertEquals(isArray(input), false)
})

Deno.test('isArray: should return false for input undefined', () => {
  const input = null
  assertEquals(isArray(input), false)
})
