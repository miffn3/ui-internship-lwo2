export function findEqualIndex(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((acc, cur) => acc + cur);
  return arr.reduce((acc, cur, index) => {
    rightSum -= cur;
    if (leftSum === rightSum && acc === -1) {
      return index;
    }
    leftSum += cur;
    return acc;
  }, -1);
}
