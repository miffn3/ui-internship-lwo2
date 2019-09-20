/**
 * binaryDecode - Parse passed binary string
 * and returns English translated sentence.
 *
 * @example
 * //return Real
 * binaryDecode('01010010 01100101 01100001 01101100');
 * @param {String} message - space separated binary string.
 * @return {String} translated English sentence.
 */
export function binaryDecode(message) {
  if (!message) {
    return '';
  }
  const encodeWords = message.split(' ');
  return encodeWords.reduce((acc, cur) => {
    return acc + String.fromCharCode(parseInt(cur, 2));
  }, '');
}
