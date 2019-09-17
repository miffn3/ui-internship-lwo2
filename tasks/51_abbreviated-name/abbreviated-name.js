/**
 * abbreviated - Converts a fullname in abbreviated form.
 *
 * @example
 * //return Verbovyi D. O.
 * abbreviated('Verbovyi Dmytro Oleksandrovych');
 * @param {String} str - fullname that function will convert.
 * @return {String} abbreviated form of source string.
 */
export function abbreviated(str) {
  return str.split(' ').reduce((acc, cur, index) => {
    if (index === 0) {
      return acc + cur;
    }
    return acc + ' ' + cur[0] + '.';
  }, '');
}
