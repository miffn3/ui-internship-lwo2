/**
 * updateRecords - Updates your collection of records by provided data.
 *
 * @example
 * //return {'1': { 'album': 'new', } }
 * updateRecords(1, 'album', 'new');
 * @param {Number} albumId - id of album which needed to update.
 * @param {String} albumProperty - property which need to update.
 * @param {String} newValue - new value of given property to update.
 * If it's '' then function will delete given property.
 * @return {Object}
 */
export function updateRecords(albumId, albumProperty, newValue) {
  const album = collection[albumId];
  if (!newValue) {
    delete album[albumProperty];
    return collection;
  }
  if (albumProperty !== 'tracks') {
    album[albumProperty] = newValue;
  } else {
    if (album[albumProperty]) {
      if (Array.isArray(album[albumProperty])) {
        album[albumProperty] = album[albumProperty].concat(newValue);
      } else {
        album[albumProperty] = [album[albumProperty], newValue];
      }
    } else {
      album[albumProperty] = [newValue];
    }
  }
  return collection;
}

const collection = {
  '2548': {
    'album': 'Slippery When Wet',
    'artist': 'Bon Jovi',
    'tracks': ['Let It Rock', 'You Give Love a Bad Name'],
  },
  '2468': {
    'album': '1999',
    'artist': 'Prince',
    'tracks': ['1999', 'Little Red Corvette'],
  },
  '1245': {
    'artist': 'Robert Palmer',
    'tracks': [],
  },
  '5439': {
    'album': 'ABBA Gold',
  },
};
