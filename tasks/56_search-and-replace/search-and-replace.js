/**
 * myReplace - Perform a search and replace on the sentence
 * using the arguments provided and return the new sentence.
 *
 * @example
 * //return 'Let us go to the mall'
 * myReplace("Let us go to the store", "store", "mall");
 * @param {String} source - source sentence.
 * @param {String} searchValue - sentence to perform the search and replace on.
 * @param {String} replacer - sentence to replace.
 * @return {String} new sentence after replacing.
 */
export function myReplace(source, searchValue, replacer) {
  const words = [];
  for (let i = 0; i < replacer.length; i++) {
    if (searchValue[i] && searchValue[i] === searchValue[i].toUpperCase()) {
      words.push(replacer[i].toUpperCase());
    } else {
      words.push(replacer[i]);
    }
  }
  return source.replace(searchValue, words.join(''));
}
