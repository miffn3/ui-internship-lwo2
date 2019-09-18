/**
 * binaryEncode - Encode passed English sentence to binary string.
 *
 * @example
 * //return 01010010 01100101 01100001 01101100
 * binaryEncode('Real');
 * @param {String} str - source sentence.
 * @return {String} space separated binary string.
 */
export function binaryEncode(str) {
  if (!str) {
    return '';
  }
  let result = str.charCodeAt(0).toString(2);
  while (result.length < 8) {
    result = 0 + result;
  }
  for (let i = 1; i < str.length; i++) {
    let encodeChar = str.charCodeAt(i).toString(2);
    while (encodeChar.length < 8) {
      encodeChar = 0 + encodeChar;
    }
    result += ' ' + encodeChar;
  }
  return result;
}
