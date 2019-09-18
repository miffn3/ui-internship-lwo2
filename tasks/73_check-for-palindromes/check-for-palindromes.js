/**
 * palindrome - Checks that given word is palindrome.
 *
 * @example
 * //return true
 * palindrome("eye");
 * @param {String} str - word to check.
 * @return {Boolean}
 */
export function palindrome(str) {
  const trimStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const n = trimStr.length / 2;
  for (let i = 0; i < n; i++) {
    if (trimStr[i] !== trimStr[trimStr.length - i - 1]) {
      return false;
    }
  }
  return true;
}
