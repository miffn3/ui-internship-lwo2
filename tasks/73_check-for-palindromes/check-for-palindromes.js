/**
 * palindrome - Checks that given word is palindrome.
 *
 * @example
 * //return true
 * palindrome("eye");
 * @param {String} word - word to check.
 * @return {Boolean}
 */
export function palindrome(word) {
  const trimmedString = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedString = Array.from(trimmedString).reverse().join('');
  for (let i = 0; i < trimmedString.length; i++) {
    if (trimmedString[i] !== reversedString[i]) {
      return false;
    }
  }
  return true;
}
