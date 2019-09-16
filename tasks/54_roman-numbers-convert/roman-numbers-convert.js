export function convertToRoman(num) {
  return Array.from(num.toString()).reduce((acc, cur, index, array) => {
    if (index < array - 3 && array.length > 3) {
      return acc.concat('M');
    }
    if (index === array.length - 3 && cur) {
      if (cur === '4') {
        return acc.concat('CD');
      }
      if (cur === '9') {
        return acc.concat('CM');
      }
      return acc.concat('D'.repeat(cur / 5) + 'C'.repeat(cur % 5));
    }
    if (index === array.length - 2) {
      if (cur === '4') {
        return acc.concat('XL');
      }
      if (cur === '9') {
        return acc.concat('XC');
      }
      return acc.concat('L'.repeat(cur / 5) + 'X'.repeat(cur % 5));
    }
    if (index === array.length - 1) {
      if (cur === '4') {
        return acc.concat('IV');
      }
      if (cur === '9') {
        return acc.concat('IX');
      }
      return acc.concat('V'.repeat(cur / 5) + 'I'.repeat(cur % 5));
    }
  }, '');
}
