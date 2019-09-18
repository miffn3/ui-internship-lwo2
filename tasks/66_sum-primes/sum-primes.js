/**
 * sumPrimes - Perfom search of prime numbers
 * before provided number and summarize them.
 *
 * @example
 * //return 17
 * sumPrimes(10);
 * @param {Number} num - number that limiting range of searching.
 * @return {Number} sum of prime numbers
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

