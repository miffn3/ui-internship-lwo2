/**
 * translatePigLatin - Translate the provided string to pig latin.
 *
 * @example
 * //return aliforniacay
 * translatePigLatin("california");
 * @param {String} str - sorce string.
 * @return {String} new string after translating.
 */
export function translatePigLatin(str) {
  const vowels = ['a', 'e', 'o', 'i', 'u'];
  let count = 0;
  if (vowels.indexOf(str[0]) !== -1) {
    return str + 'way';
  }
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      return str.substring(i) + str.substring(0, count) + 'ay';
    }
    count++;
  }
}
