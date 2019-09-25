/**
 * sumFibs - Return the sum of all odd Fibonacci numbers
 * that are less than or equal to limit.
 *
 * @example
 * //return 1785
 * sumFibs(1000);
 * @param {Number} limit - number which limiting odd fibonacci numbers.
 * @return {Number} sum of all odd Fibonnaci numbers before given number.
 */
export function sumFibs(limit) {
  const fib = [1, 1];
  while (fib[fib.length - 1] < limit) {
    const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(nextFib);
  }
  if (fib[fib.length - 1] > limit) {
    fib.pop();
  }
  return fib.filter((el) => el % 2 !== 0).reduce((acc, cur) => acc + cur);
}
