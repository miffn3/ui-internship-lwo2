/**
 * swapCases - Swap case of each letter to opposite.
 *
 * @example
 * //return 'hELLO wORLD'
 * swapCases('Hello World');
 * @param {String} reverseCases - source sentence.
 * @return {String} new string with swapped letters cases.
 */
export function swapCases(reverseCases) {
  let result = '';
  for (let i = 0; i < reverseCases.length; i++) {
    if (reverseCases[i] === reverseCases[i].toUpperCase()) {
      result += reverseCases[i].toLowerCase();
    } else {
      result += reverseCases[i].toUpperCase();
    }
  }
  return result;
}
