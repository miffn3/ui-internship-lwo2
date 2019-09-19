/**
 * abbreviated - Converts a fullname in abbreviated form.
 *
 * @example
 * //return 'Verbovyi D. O.'
 * abbreviated('Verbovyi Dmytro Oleksandrovych');
 * @param {String} str - fullname which function will convert.
 * @return {String} abbreviated form of source string.
 */
export function abbreviated(str) {
  if (!str) {
    return '';
  }
  let arrayOfWords = str.split(' ');
  let newStr = arrayOfWords[0];
  for (let i = 1; i < arrayOfWords.length; i++) {
    newStr += ' ' + arrayOfWords[i][0] + '.';
  }
  return newStr;
}
