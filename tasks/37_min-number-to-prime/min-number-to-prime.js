function isPrimeNumber(num) {
  let isPrime = true;
  const n = Math.sqrt(num);
  for (let j = 2; j < n; j++) {
    if (num % j === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

export function minNumberToPrime(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur);
  const n = 2 * sum;
  for (let i = sum; i < n; i++) {
    if (isPrimeNumber(i)) {
      return i - sum;
    }
  }
}
