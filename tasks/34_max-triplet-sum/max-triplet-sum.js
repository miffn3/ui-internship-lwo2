export function maxTripletSum(arr, n = 3) {
  const set = arr.filter((el, index) => arr.indexOf(el) === index);
  if (set.length <= n) {
    return set.reduce((accum, current) => accum + current);
  }
  let sum = 0;
  set.sort((a, b) => a - b);
  for (let i = set.length - n; i < set.length; i++) {
    sum += set[i];
  }
  return sum;

}
