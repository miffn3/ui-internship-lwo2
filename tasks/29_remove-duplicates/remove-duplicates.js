export function removeDuplicates(arr) {
  const result = arr.slice();
  return result.filter((item, index) => result.indexOf(item) === index);
}
