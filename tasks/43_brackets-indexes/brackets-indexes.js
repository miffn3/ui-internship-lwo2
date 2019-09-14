export function findCloseIndex(str, num) {
  if (str[num] !== '(') {
    return -1;
  }
  let count = 1;
  for (let i = num + 1; i < str.length; i++) {
    if (str[i] === '(') {
      count++;
    } else if (str[i] === ')') {
      if (--count === 0) {
        return i;
      }
    }
  }
  return -1;
}
