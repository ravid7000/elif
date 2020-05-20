/**
 * Array util to check weather input is a valid Array
 */

const TypeOfArray = '[object Array]'

function isArray(input: any): boolean {
  return Object.prototype.toString.call(input) === TypeOfArray
}

export { isArray }
