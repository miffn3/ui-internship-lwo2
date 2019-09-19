export function findEqualIndex(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((acc, cur) => acc + cur);
  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}
