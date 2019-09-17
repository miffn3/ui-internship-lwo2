/**
 * convertHTML - Convert the characters *&*, *<*, *>*, *"* (double quote),
 * and *'*(apostrophe), in a string to their corresponding HTML entities.
 *
 * @example
 * //returns 'Dolce &amp; Gabbana'
 * convertHTML("Dolce & Gabbana")
 * @param {String} str - source string.
 * @return {String} new string with correct corresponding HTML entities.
 */
export function convertHTML(str) {
  return str.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
}
