/**
 * diffArray - Compare two arrays and return a new array with any items only
 * found in one of the two given arrays, but not both.
 *
 * @example
 * //return ["piglet",4]
 * diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
 * @param {Array<*>} arr1 - first array.
 * @param {Array<*>} arr2 - second array.
 * @return {Array<*>} array that contains symmetric difference of arr1 & arr2.
 */
export function diffArray(arr1, arr2) {
  return arr1.filter((item) => arr2.indexOf(item) === -1)
      .concat(arr2.filter((item) => arr1.indexOf(item) === -1));
}
