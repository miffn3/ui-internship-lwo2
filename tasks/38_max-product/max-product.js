export function maxProduct(arr) {
  let mults = [];
  for (let i = 0; i < arr.length - 1; i++) {
    mults.push(arr[i] * arr[i + 1]);
  }
  return mults.reduce(function(acc, cur) {
    return Math.max(acc, cur);
  });
}
