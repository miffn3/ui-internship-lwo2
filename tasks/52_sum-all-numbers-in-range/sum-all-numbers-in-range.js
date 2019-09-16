export function sumAll(arr) {
  const from = Math.min(...arr);
  const to = Math.max(...arr);
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
}
