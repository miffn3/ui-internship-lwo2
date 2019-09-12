export function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  if (num <= 3) {
    return str.slice(0, num).concat('...');
  }
  return str.slice(0, num - 3).concat('...');
}
