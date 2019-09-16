export function diffArray(arr1, arr2) {
  return arr1.filter((item) => arr2.indexOf(item) === -1)
      .concat(arr2.filter((item) => arr1.indexOf(item) === -1));
}
