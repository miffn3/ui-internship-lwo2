/**
 * uniteUnique - Perfoms filter of unique items in the range of arrays.
 *
 * @example
 * //return [1,3,2,5,4]
 * uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
 * @param  {...any} arrays - range of arrays.
 * @return {Array<*>} new array of unique items.
 */
export function uniteUnique(...arrays) {
  const result = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      if (!result.includes(arrays[i][j])) {
        result.push(arrays[i][j]);
      }
    }
  }
  return result;
}
