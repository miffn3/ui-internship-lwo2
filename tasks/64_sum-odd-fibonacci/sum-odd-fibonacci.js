/**
 * sumFibs - Return the sum of all odd Fibonacci numbers
 * that are less than or equal to num.
 *
 * @example
 * //return 1785
 * sumFibs(1000);
 * @param {Number} num - number which limiting odd fibonacci numbers.
 * @return {Number} - sum of all odd Fibonnaci numbers before given number.
 */
export function sumFibs(num) {
  const fib = [1, 1];
  while (fib[fib.length - 1] < num) {
    const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(nextFib);
  }
  if (fib[fib.length - 1] > num) {
    fib.pop();
  }
  return fib.filter((el) => el % 2 !== 0).reduce((acc, cur) => acc + cur);
}
