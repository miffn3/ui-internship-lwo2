/**
 * sumAll - Sums up all numbers in the given range.
 *
 * @example
 * //return 10
 * sumAll([1, 4]);
 * @param {Array<Number>} arr - range of numbers to sum.
 * @return {Number} sum of all numbers in the range.
 */
export function sumAll(arr) {
  const from = Math.min(...arr);
  const to = Math.max(...arr);
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
}
