/**
 * findLetter - Find the missing letter in the passed
 * letter range and return it.
 *
 * @example
 * //return 'd'
 * findLetter("abce");
 * @param {String} str - letter range.
 * @return {*} missing letter or undefined, if it hasn't founded.
 */
export function findLetter(str) {
  let lastIndex = str.charCodeAt(0);
  for (let i = 1; i < str.length; i++) {
    const currentIndex = str.charCodeAt(i);
    if (currentIndex - lastIndex !== 1) {
      return String.fromCharCode(currentIndex - 1);
    }
    lastIndex = currentIndex;
  }
  return undefined;
}
