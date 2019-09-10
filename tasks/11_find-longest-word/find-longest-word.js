export function findLongestWord(str) {
  const arr = str.split(' ');
  const findMax = (accum, current) => Math.max(accum, current);
  return arr.map((el) => el.length).reduce(findMax);
}
