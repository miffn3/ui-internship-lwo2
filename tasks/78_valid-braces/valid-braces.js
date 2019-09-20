/**
 * validBraces - Checks that braces in source sentece close in correct order.
 *
 * @example
 * //return true
 * validBraces("(){}[]");
 * @param {String} sequenceOfBraces - source string which contains braces.
 * @return {Boolean}
 */
export function validBraces(sequenceOfBraces) {
  const stack = [];
  const openBraces = ['(', '{', '['];
  const closeBraces = [')', '}', ']'];
  for (let i = 0; i < sequenceOfBraces.length; i++) {
    if (openBraces.indexOf(sequenceOfBraces[i]) !== -1) {
      stack.push(sequenceOfBraces[i]);
    } else if (closeBraces.indexOf(sequenceOfBraces[i]) !== -1) {
      const indexOfLastElement = openBraces.indexOf(stack.pop());
      if (indexOfLastElement !== closeBraces.indexOf(sequenceOfBraces[i])) {
        return false;
      }
    }
  }
  return !stack.length;
}
