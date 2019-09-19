/**
 * validBraces - Checks that braces in source sentece close in correct order.
 *
 * @example
 * //return true
 * validBraces("(){}[]");
 * @param {String} str - source string which contains braces.
 * @return {Boolean}
 */
export function validBraces(str) {
  const stack = [];
  const openBraces = ['(', '{', '['];
  const closeBraces = [')', '}', ']'];
  for (let i = 0; i < str.length; i++) {
    if (openBraces.indexOf(str[i]) !== -1) {
      stack.push(str[i]);
    } else if (closeBraces.indexOf(str[i]) !== -1) {
      const indexOfLastElement = openBraces.indexOf(stack.pop());
      if (indexOfLastElement !== closeBraces.indexOf(str[i])) {
        return false;
      }
    }
  }
  return !stack.length;
}
