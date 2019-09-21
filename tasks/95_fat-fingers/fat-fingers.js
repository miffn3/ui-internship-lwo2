/**
 * fatFingers - Formats text cases: If character is 'A' (or 'a)
 * then enable CapsLock. If CapsLock is enabled then reverse capitalization.
 *
 * @example
 * //return BBbbB
 * fatFingers("abABaBabAb");
 * @param {String} text - provided text.
 * @return {String} formatted text.
 */
export function fatFingers(text) {
  let isActiveCapsLock = false;
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === 'a' || text[i] === 'A') {
      isActiveCapsLock = !isActiveCapsLock;
    } else {
      if (isActiveCapsLock) {
        if (text[i] === text[i].toLowerCase()) {
          result += text[i].toUpperCase();
        } else if (text[i] === text[i].toUpperCase()) {
          result += text[i].toLowerCase();
        }
      } else {
        result += text[i];
      }
    }
  }
  return result;
}
