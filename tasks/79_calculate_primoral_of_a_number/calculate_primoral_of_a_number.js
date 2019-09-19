/**
 * numPrimoral - Calculates primorial of a number.
 *
 * @example
 * //return 30
 * numPrimoral(3);
 * @param {Number} num - provided number.
 * @return {Number} primoral of a number.
 */
export function numPrimorial(num) {
  let count = 0;
  let result = 1;
  let i = 2;
  while (count < num) {
    if (isPrimeNumber(i)) {
      result *= i;
      count++;
    }
    i++;
  }
  return result;
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
