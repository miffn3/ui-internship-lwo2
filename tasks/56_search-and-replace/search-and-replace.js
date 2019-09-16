export function myReplace(str, before, after) {
  const newStr = [];
  for (let i = 0; i < after.length; i++) {
    if (before[i] && before[i] === before[i].toUpperCase()) {
      newStr.push(after[i].toUpperCase());
    } else {
      newStr.push(after[i]);
    }
  }
  return str.replace(before, newStr.join(''));
}
