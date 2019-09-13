export function minNumberToPrime(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur);
  let closestPrime = sum;
  for (let i = sum; i < 2 * sum; i++) {
    let isPrime = true;
    for (let j = 2; j < Math.sqrt(sum); j ++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      closestPrime = i;
      break;
    }
  }
  return closestPrime - sum;
}
