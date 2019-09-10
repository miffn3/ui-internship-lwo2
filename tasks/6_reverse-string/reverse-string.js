export function reverseString(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}
