export function stringExpansion(str) {
  let n = 1;
  return Array.from(str).reduce((acc, cur, index) => {
    if (cur.toString().match(/\d/)) {
      n = cur;
      return acc;
    }
    return acc.concat(cur.toString().repeat(n));
  }, '');
}
