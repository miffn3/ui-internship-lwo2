/**
 * sym - Calculates symmetric difference of given arrays.
 *
 * @example
 * //return [3, 4, 5]
 * sym([1, 2, 3], [5, 2, 1, 4]);
 * @param  {...any} arrays - provided set of arrays.
 * @return {Array<Number>} new array which contains
 * symmetric difference of arrays.
 */
export function sym(...arrays) {
  const result = new Set();
  for (let i = 0; i < arrays.length; i++) {
    const setOfSubArray = new Set(arrays[i]);
    const subArray = Array.from(setOfSubArray);
    for (let j = 0; j < subArray.length; j++) {
      const curItem = subArray[j];
      if (result.has(curItem)) {
        result.delete(curItem);
      } else {
        result.add(curItem);
      }
    }
  }
  return Array.from(result).sort((a, b) => a - b);
}
