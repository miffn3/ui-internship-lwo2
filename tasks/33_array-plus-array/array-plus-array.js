export function arrayPlusArray(arr1, arr2) {
  const result = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] === undefined) {
      result.push(arr2[i]);
    } else if (arr2[i] === undefined) {
      result.push(arr1[i]);
    } else {
      result.push(arr1[i] + arr2[i]);
    }
  }
  return result;
}
