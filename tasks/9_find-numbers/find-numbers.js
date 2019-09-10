export function getNumbers(str) {
  let regex = /\d+/g;
  let stringDigits = str.match(regex);
  let digits = [];
  for (let i = 0; i < stringDigits.length; i++) {
    digits.push(+stringDigits[i]);
  }
  return digits;
}
