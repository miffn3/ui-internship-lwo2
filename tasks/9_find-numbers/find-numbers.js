export function getNumbers(str) {
  const regex = /\d+/g;
  const stringDigits = str.match(regex);
  const digits = [];
  for (let i = 0; i < stringDigits.length; i++) {
    digits.push(+stringDigits[i]);
  }
  return digits;
}
