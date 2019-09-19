/**
 * deepClone - Clones nested object.
 *
 * @example
 * //return { a: 1, b: { c:10 } }
 * deepClone({ a: 1, b: { c:10 } });
 * @param {Object} obj - object provided to copying.
 * @return {Object} new deep copy of object.
 */
export function deepClone(obj) {
  const copied = (function copy(toCopy) {
    const result = {};
    for (let key in toCopy) {
      if (typeof toCopy[key] === 'object' && obj[key] !== null) {
        result[key] = copy(obj[key]);
      } else {
        result[key] = toCopy[key];
      }
    }
    return result;
  })(obj);
  return copied;
}
