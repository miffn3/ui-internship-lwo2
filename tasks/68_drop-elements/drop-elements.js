/**
 * dropElements - Drops the elements of an array (first argument),
 * starting from the front, until the predicate (second argument) returns true.
 *
 * @example
 * //return [3, 4]
 * dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
 * @param {Array<*>} array - source array.
 * @param {Function} filter - executes on each element.
 * @return {Array<*>} new array after filtering.
 */
export function dropElements(array, filter) {
  const copy = [];
  let checker = false;
  for (let i = 0; i < array.length; i++) {
    if (filter(array[i])) {
      checker = true;
    }
    if (checker) {
      copy.push(array[i]);
    }
  }
  return copy;
}
