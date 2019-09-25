/**
 * numPrimoral - Calculates primorial of a number.
 *
 * @example
 * //return 30
 * numPrimoral(3);
 * @param {Number} number - provided number.
 * @return {Number} primoral of a number.
 */
export function numPrimorial(number) {
  let count = 0;
  let result = 1;
  let i = 2;
  while (count < number) {
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
 * @param {Number} number - number provided to check.
 * @return {Boolean}
 */
function isPrimeNumber(number) {
  let isPrime = true;
  const n = Math.sqrt(number);
  for (let j = 2; j <= n; j++) {
    if (number % j === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
