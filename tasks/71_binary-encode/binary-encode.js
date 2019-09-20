/**
 * binaryEncode - Encode passed English sentence to binary string.
 *
 * @example
 * //return 01010010 01100101 01100001 01101100
 * binaryEncode('Real');
 * @param {String} message - source sentence.
 * @return {String} space separated binary string.
 */
export function binaryEncode(message) {
  if (!message) {
    return '';
  }
  let result = message.charCodeAt(0).toString(2);
  result = addNotNecessaryZeroes(result);
  for (let i = 1; i < message.length; i++) {
    let encodeChar = message.charCodeAt(i).toString(2);
    result += ' ' + addNotNecessaryZeroes(encodeChar);
  }
  return result;
}

/**
 * addNotNecessaryZeroes - Adding not necessary zeroes to
 * binary sequence of 1 byte.
 *
 * @example
 * //return 00011111
 * addNotNecessaryZeroes('11111');
 * @param {String} binarySequence - sequence of 0 and 1.
 * @return {String}
 */
function addNotNecessaryZeroes(binarySequence) {
  while (binarySequence.length < 8) {
    binarySequence = 0 + binarySequence;
  }
  return binarySequence;
}
