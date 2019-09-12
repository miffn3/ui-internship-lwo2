export function arrayChunks(arr, size) {
  const resultArray = [];
  const numberOfGroups = arr.length / size;
  for (let i = 0; i < numberOfGroups; i ++) {
    resultArray.push(arr.slice(i * size, (i + 1) * size));
  }
  return resultArray;
}
