export function largestOfFour(arr) {
  const result = [];
  const findMax = (accum, current) => Math.max(accum, current);
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].reduce(findMax));
  }
  return result;
}
