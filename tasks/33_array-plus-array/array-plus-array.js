export function arrayPlusArray(arr1, arr2) {
  const result = [];
  const n = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < n; i++) {
    result.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  return result;
}
