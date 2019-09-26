/**
 * leastCommonMultiple - Finds least common multiple.
 *
 * @example
 * //return 12
 * leastCommonMultiple(6, 4);
 * @param {Number} number1 - first number.
 * @param {Number} number2 - second number.
 * @return {Number} least common multiple.
 */
export function leastCommonMultiple(number1, number2) {
  const biggerNumber = Math.max(number1, number2);
  const lessNumber = Math.min(number1, number2);
  const maxCommonMultiple = number1 * number2;
  let j = 1;
  let biggestNumberMultiple = biggerNumber;
  while (biggestNumberMultiple < maxCommonMultiple) {
    biggestNumberMultiple = biggerNumber * j;
    if (biggestNumberMultiple % lessNumber === 0) {
      return biggestNumberMultiple;
    }
    j++;
  }
  return maxCommonMultiple;
}
