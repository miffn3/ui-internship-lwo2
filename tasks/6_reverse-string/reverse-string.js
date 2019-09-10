export function reverseString(str) {
  const arr = str.split('');
  const len = arr.length;
  for (let i = 0; i <= len / 2; i++) {
    const tmp = arr[i];
    arr[i] = arr[len-i];
    arr[len-i] = tmp;
  }
  return arr.join('');
}
