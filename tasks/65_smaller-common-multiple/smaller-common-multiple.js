/**
 * smallestCommons - Prevent search of the smallest common multiple
 * of the range between the provided parameters, including that numbers.
 *
 * @example
 * //return 60
 * smallestCommons([1, 5]);
 * @param {Array<Number>} arr - range of numbers
 * @return {Number} - least common multiple
 */
export function smallestCommons(arr) {
  const from = Math.min(...arr);
  const to = Math.max(...arr);
  let biggestNumberMultiple = to;
  let maxCommon = 1;
  for (let i = from; i <= to; i++) {
    maxCommon *= i;
  }
  let j = 1;
  while (biggestNumberMultiple < maxCommon) {
    let isCommon = true;
    biggestNumberMultiple = to * j;
    for (let j = from; j <= to; j++) {
      if (biggestNumberMultiple % j !== 0) {
        isCommon = false;
      }
    }
    if (isCommon) {
      return biggestNumberMultiple;
    }
    j++;
  }
  return maxCommon;
}
