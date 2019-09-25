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
  return copy(obj);
}

/**
 * copy - Recursive function for deep copy provided object.
 *
 * @example
 * //return { a: 1 }
 * copy({ a: 1 })
 * @param {Object} source - object that needed to be copyied.
 * @return {Object} copy of object.
 */
function copy(source) {
  const result = {};
  for (let key in source) {
    if ((typeof source[key] === 'object' || typeof source[key] === 'function')
        && source[key] !== null) {
      result[key] = copy(source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}
