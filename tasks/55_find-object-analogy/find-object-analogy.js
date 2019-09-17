/**
 * whatIsInAName - Performs search for objects with matching properties-value
 *  pairs with source object in collection and return array of them.
 *
 * @example
 * //return [{ "a": 1, "b": 2 }]
 * whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }], { "a": 1,  "b": 2 });
 * @param {Array<Object>} collection - array of objects.
 * @param {Object} source - objects for matching.
 * @return {Array<Object>} array of matched objects.
 */
export function whatIsInAName(collection, source) {
  return collection.filter((cur) => {
    for (let key in source) {
      if (cur.hasOwnProperty(key)) {
        if (cur[key] != source[key]) {
          return false;
        }
        continue;
      } else {
        return false;
      }
    }
    return true;
  });
}
