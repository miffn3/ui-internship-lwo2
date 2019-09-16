export function abbreviated(str) {
  return str.split(' ').reduce((acc, cur, index) => {
    if (index === 0) {
      return acc.concat(cur);
    }
    return acc.concat(' ' + cur[0] + '.');
  }, '');
}
