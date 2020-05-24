// @ts-nocheck

function isNode(input) {
  return typeof Node === 'object'
    ? input instanceof Node
    : typeof input === 'object' &&
        typeof input.nodeType === 'number' &&
        typeof input.nodeName === 'string'
}

export { isNode }
