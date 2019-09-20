/**
* convertToRoman - Converts number from arabic numeral to roman numeral.
*
* @example
* //return 'II'
* convertToRoman(2)
* @param {Number} num - number in arabic style.
* @return {String} equivalent in roman numeral of num.
*/
export function convertToRoman(num) {
  let romanNumber = '';
  const thousands = Math.floor(num / 1000);
  const hundreds = Math.floor(num % 1000 / 100);
  const tens = Math.floor(num % 1000 / 10 % 10);
  const ones = Math.floor(num % 10);
  romanNumber += 'M'.repeat(thousands);
  if (hundreds === 4) {
    romanNumber += 'CD';
  } else if (hundreds === 9) {
    romanNumber += 'CM';
  } else {
    romanNumber += 'D'.repeat(hundreds / 5) + 'C'.repeat(hundreds % 5);
  }
  if (tens === 4) {
    romanNumber += 'XL';
  } else if (tens === 9) {
    romanNumber += 'XC';
  } else {
    romanNumber += 'L'.repeat(tens / 5) + 'X'.repeat(tens % 5);
  }
  if (ones === 4) {
    romanNumber += 'IV';
  } else if (ones === 9) {
    romanNumber += 'IX';
  } else {
    romanNumber += 'V'.repeat(ones / 5) + 'I'.repeat(ones % 5);
  }
  return romanNumber;
}
