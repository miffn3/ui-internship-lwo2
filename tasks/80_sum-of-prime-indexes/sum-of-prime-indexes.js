/**
 * sumPrimeIndexedElements - Summarize elements which occupying
 * prime-numbered indices.
 *
 * @example
 * //return 7
 * sumPrimeIndexedElements([1, 2, 3, 4]);
 * @param {Array<Number>} array - array of numbers to summarize.
 * @return {Number} sum of elements which occupying prime-numbered indices.
 */
export function sumPrimeIndexedElements(array) {
  let sum = 0;
  for (let i = 2; i < array.length; i++) {
    if (isPrimeNumber(i)) {
      sum += array[i];
    }
  }
  return sum;
}

/**
 * isPrimeNumber - Checks that number is prime or not.
 *
 * @example
 * //return true
 * isPrimeNumber(5);
 * @param {Number} num - number provided to check.
 * @return {Boolean}
 */
function isPrimeNumber(num) {
  let isPrime = true;
  const n = Math.sqrt(num);
  for (let j = 2; j <= n; j++) {
    if (num % j === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
