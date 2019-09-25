/**
 * unpackArray - Flatten a nested array.
 *
 * @example
 * //return ["a","b"]
 * unpackArray([[["a"]], [["b"]]]);
 * @param {Array<*>} array - nested array.
 * @return {Array<*>} flat array.
 */
export function unpackArray(array) {
  const stack = [...array];
  const result = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  return result.reverse();
}
