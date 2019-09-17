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
