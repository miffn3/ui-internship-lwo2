/**
 * addedChar - Finds which character where add to source string.
 *
 * @example
 * //return 2
 * addedChar('abcde', '2db2a2ec');
 * @param {String} source - source string.
 * @param {String} expanded - new string that differs from the
 * source by same 3 characters.
 * @return {String} added character.
 */
export function addedChar(source, expanded) {
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== expanded[i]) {
      return expanded[i];
    }
  }
  return expanded[expanded.length - 1];
}
