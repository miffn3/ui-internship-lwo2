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
  const vowels = /[aeoiu]/;
  if (str[0].match(vowels)) {
    return str + 'way';
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(vowels)) {
      return str.substring(i) + str.substring(0, i) + 'ay';
    }
  }
}
