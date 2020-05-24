// @ts-nocheck

import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { isNode } from './mod.js'

Deno.test('isNode: tests', () => {
  assertEquals(isNode(document.createElement('div')), true)
})
