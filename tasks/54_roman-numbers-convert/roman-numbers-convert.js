/**
* convertToRoman - Converts number to roman numeral.
*
* @example
* //return 'II'
* convertToRoman(2)
* @param {Number} num - number in arabic style.
* @return {String} equivalent in roman numeral of num.
*/
export function convertToRoman(num) {
  return Array.from(num.toString()).reduce((acc, cur, index, array) => {
    if (index < array - 3 && array.length > 3) {
      return acc + 'M';
    }
    if (index === array.length - 3 && cur) {
      if (cur === '4') {
        return acc + 'CD';
      }
      if (cur === '9') {
        return acc + 'CM';
      }
      return acc + 'D'.repeat(cur / 5) + 'C'.repeat(cur % 5);
    }
    if (index === array.length - 2) {
      if (cur === '4') {
        return acc + 'XL';
      }
      if (cur === '9') {
        return acc + 'XC';
      }
      return acc + 'L'.repeat(cur / 5) + 'X'.repeat(cur % 5);
    }
    if (index === array.length - 1) {
      if (cur === '4') {
        return acc + 'IV';
      }
      if (cur === '9') {
        return acc + 'IX';
      }
      return acc + 'V'.repeat(cur / 5) + 'I'.repeat(cur % 5);
    }
  }, '');
}
