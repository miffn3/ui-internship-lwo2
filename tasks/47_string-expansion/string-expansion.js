export function stringExpansion(str) {
  let n = 1;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/\d/)) {
      n = Number(str[i]);
    } else {
      result = result.concat(str[i].repeat(n));
    }
  }
  return result;
}
