export function firstNSmallest(arr, n) {
  const result = arr.slice();
  while (result.length > n) {
    const max = Math.max(...result);
    for (let j = result.lastIndexOf(max); j < result.length; j++) {
      if (result[j] === max && result.length > n) {
        result.splice(j, 1);
      }
    }
  }
  return result;
}
