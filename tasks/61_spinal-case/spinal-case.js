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
  const letters = Array.from(str);
  const result = [];
  const separators = [' ', '_', '-'];
  let word = letters[0].toLowerCase();
  for (let i = 1; i < letters.length; i++) {
    if (separators.indexOf(letters[i]) !== -1) {
      result.push(word);
      word = '';
    } else if (letters[i] === letters[i].toUpperCase()) {
      if (word) {
        result.push(word);
      }
      word = letters[i].toLowerCase();
    } else {
      word += letters[i];
    }
  }
  result.push(word);
  return result.join('-');
}
