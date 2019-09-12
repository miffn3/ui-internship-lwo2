export function arrayLeaders(arr) {
  const result = [];
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let current = arr.shift();
    if (current > arr.reduce((acc, cur) => acc + cur)) {
      result.push(current);
    }
  }
  const last = arr.shift();
  if (last > 0) {
    result.push(last);
  }
  return result;
}
