/**
 * dropElements - Drops the elements of an array (first argument),
 * starting from the front, until the predicate (second argument) returns true.
 *
 * @example
 * //return [3, 4]
 * dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
 * @param {Array<*>} arr - source array.
 * @param {Function} func - executes on each element.
 * @return {Array<*>} new array after filtering.
 */
export function dropElements(arr, func) {
  const copy = arr.slice();
  for (let i = 0; i < copy.length; i++) {
    if (func(copy[0])) {
      break;
    }
    copy.shift();
    i--;
  }
  return copy;
}
