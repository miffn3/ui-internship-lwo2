/**
 * spinalCase - Convert a string to spinal case.
 *
 * @example
 * //return this-is-spinal-tap'
 * spinalCase("This Is Spinal Tap")
 * @param {String} str - source string in any case.
 * @return {String} new string converted to spinal case.
 */
export function spinalCase(str) {
  const separators = /([-_\s])/g;
  return str.replace(separators, '-').replace(/[A-Z]/g, upperToHyphenLower);
}

/**
 * upperToHyphenLower - Replace source character to its lower case wih hyphen.
 *
 * @example
 * //return -a
 * upperToHyphenLower('A', 1, 'dAte')
 * @param {String} match - source character.
 * @param {Number} offset - character index.
 * @param {String} string - sentence where source character placed.
 * @return {String}
 */
function upperToHyphenLower(match, offset, string) {
  let result = '';
  if (offset > 0 && string[offset - 1] !== '-') {
    result += '-';
  }
  return result + match.toLowerCase();
}
