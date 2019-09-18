/**
 * sumPrimes - Perfom search of prime numbers
 * before provided number and summarize them.
 *
 * @example
 * //return 17
 * sumPrimes(10);
 * @param {Number} num - number which limiting range of searching.
 * @return {Number} sum of prime numbers.
 */
export function sumPrimes(num) {
  const primes = [];
  for (let i = 2; i <= num; i++) {
    if (isPrimeNumber(i)) {
      primes.push(i);
    }
  }
  return primes.reduce((acc, cur) => acc + cur);
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

