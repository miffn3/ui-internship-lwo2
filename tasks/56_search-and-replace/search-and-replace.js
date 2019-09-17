/**
 * myReplace - Perform a search and replace on the sentence
 * using the arguments provided and return the new sentence.
 *
 * @example
 * //return 'Let us go to the mall'
 * myReplace("Let us go to the store", "store", "mall");
 * @param {String} str - source sentence.
 * @param {String} before - sentence to perform the search and replace on.
 * @param {String} after - sentence to replace.
 * @return {String} new sentence after replacing.
 */
export function myReplace(str, before, after) {
  const newStr = [];
  for (let i = 0; i < after.length; i++) {
    if (before[i] && before[i] === before[i].toUpperCase()) {
      newStr.push(after[i].toUpperCase());
    } else {
      newStr.push(after[i]);
    }
  }
  return str.replace(before, newStr.join(''));
}
