export function abbreviated(str) {
  return str.split(' ').reduce((acc, cur, index) => {
    if (index === 0) {
      return acc + cur;
    }
    return acc + ' ' + cur[0] + '.';
  }, '');
}
