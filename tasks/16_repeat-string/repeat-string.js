export function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return '';
  }
  let newStr = str;
  for (let i = 1; i < num; i++) {
    newStr = newStr.concat(str);
  }
  return newStr;
}
