/**
 * pairwise - Returns sum of indexes of pairs whose sum equals
 * target number (second argument).
 *
 * @example
 * //return 1
 * pairwise([1, 3, 2, 4], 4);
 * @param {Array<Number>} array - provided array of numbers.
 * @param {Number} target - number to check sums of pairs.
 * @return {Number} sum of indexes.
 */
export function pairwise(array, target) {
  let sum = 0;
  const indexes = new Set();
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (i !== j && !indexes.has(j) && !indexes.has(i)) {
        if (array[i] + array[j] === target) {
          indexes.add(i);
          indexes.add(j);
          sum += i + j;
        }
      }
    }
  }
  return sum;
}
