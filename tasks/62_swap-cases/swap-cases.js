/**
 * swapCases - Swap case of each letter to opposite.
 *
 * @example
 * //return 'hELLO wORLD'
 * swapCases('Hello World');
 * @param {String} str
 * @return {String} - new string with swapped letters cases.
 */
export function swapCases(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}
