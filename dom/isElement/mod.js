// @ts-nocheck

function isElement(input) {
  return typeof HTMLElement === 'object'
    ? input instanceof HTMLElement
    : typeof input === 'object' &&
        input !== null &&
        input.nodeType === 1 &&
        typeof input.nodeName === 'string'
}

export { isElement }
