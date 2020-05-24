// @ts-nocheck

function isValidAttr(attrs) {
  return (
    typeof attrs === 'object' &&
    Object.prototype.toString.call(attrs) !== '[object Array]'
  )
}

function keys(input) {
  if (!input) {
    return []
  }
  return typeof Object.keys === 'function'
    ? Object.keys(input)
    : Object.getOwnPropertyNames(input)
}

function isValidChild(childs) {
  return Object.prototype.toString.call(childs) !== '[object Array]'
}

function isElement(input) {
  return typeof HTMLElement === 'object'
    ? input instanceof HTMLElement
    : typeof input === 'object' &&
        input !== null &&
        input.nodeType === 1 &&
        typeof input.nodeName === 'string'
}

function setStyles(elm, styles) {
  if (!isValidAttr(styles)) {
    return elm
  }
  var styleKeys = keys(styles),
    len = styleKeys.length,
    i = 0
  while (i < len) {
    var key = styleKeys[i]
    elm.style[key] = styles[key]
    i += 1
  }
  return elm
}

function createElement(element, attrs, childs) {
  if (!element) {
    throw new TypeError('input is not a valid element')
  }

  if (typeof element === 'string') {
    element = document.createElement(element)
  } else if (!isElement(element)) {
    throw new TypeError('input is not a valid element')
  }

  if (!isValidAttr(attrs)) {
    throw new TypeError('attrs should be object or null')
  }

  var attrKeys = keys(attrs),
    len = attrKeys.length,
    i = 0
  while (i < len) {
    var key = attrKeys[i]
    var attr = attrs[key]
    if (key === 'style') {
      setStyles(element, attr)
    } else {
      element.setAttribute(key, attr)
    }
    i += 1
  }

  if (childs && isValidChild(childs)) {
    i = 0
    len = childs.length
    while (i < len) {
      var child = childs[i]
      element.appendChild(
        createElement(child.element, child.attrs, child.childs)
      )
      i += 1
    }
  }

  return element
}

export { createElement }
