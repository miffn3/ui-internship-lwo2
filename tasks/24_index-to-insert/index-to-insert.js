export function getIndexToInsert(arr, num) {
  const result = arr.slice();
  result.push(num);
  result.sort((a, b) => a - b);
  return result.indexOf(num);
}
