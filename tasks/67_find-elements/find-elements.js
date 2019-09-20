/**
 * findElement - Looks through an array (first argument) and returns
 * the first element in the array that passes a truth test (second argument).
 *
 * @example
 * @param {Array<*>} array - array for searching.
 * @param {Function} controller - executes on each element.
 * @return {*} element which passes truth test.
 */
export function findElement(array, controller) {
  for (let i = 0; i < array.length; i++) {
    if (controller(array[i])) {
      return array[i];
    }
  }
}
