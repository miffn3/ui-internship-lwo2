export function firstNSmallest(arr, n) {
  let count = 0;
  const lastMin = arr.reduce((last) => {
    if (count >= n) {
      return last;
    }
    let min = arr.reduce((acc, cur) => {
      if (cur < acc && cur > last) {
        return cur;
      }
      return acc;
    }, Number.MAX_SAFE_INTEGER);
    count += arr.reduce((acc, cur) => {
      if (cur === min) {
        return ++acc;
      }
      return acc;
    }, 0);
    return min;
  }, Number.MIN_SAFE_INTEGER);
  let newLength = 0;
  return arr.filter((item) => item <= lastMin && ++newLength <= n);
}
