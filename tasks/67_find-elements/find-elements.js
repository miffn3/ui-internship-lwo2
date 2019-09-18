/**
 * findElement - Looks through an array (first argument) and returns
 * the first element in the array that passes a truth test (second argument).
 *
 * @example
 * @param {Array<*>} arr - array for searching.
 * @param {Function} func - executes on each element.
 * @return {*} element which passes truth test.
 */
export function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
}
