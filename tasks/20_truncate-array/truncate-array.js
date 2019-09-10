export function truncateArray(arr, size) {
  const copyArr = arr.slice();
  return copyArr.slice(size, copyArr.length);
}
