/**
 * binaryDecode - Parse passed binary string
 * and returns English translated sentence.
 *
 * @example
 * //return Real
 * binaryDecode('01010010 01100101 01100001 01101100');
 * @param {String} str - space separated binary string.
 * @return {String} trnaslated English sentence.
 */
export function binaryDecode(str) {
  if (!str) {
    return '';
  }
  const encodeWords = str.split(' ');
  return encodeWords.reduce((acc, cur) => {
    return acc + String.fromCharCode(parseInt(cur, 2));
  }, '');
}
