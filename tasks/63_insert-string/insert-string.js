/**
 * insert - Insert a string within a string
 * at a particular position (default is 1).
 *
 * @example
 * //return 'JavaScript We are doing some exercises.'
 * insert('We are doing some exercises.','JavaScript ')
 * @param {String} sentenceWhereInsert - source sentence.
 * @param {String} insertable - string to insert.
 * @param {Number} position - position where to insert insertable
 * string (position = 0 by default).
 * @return {String} new sentence with inserted string.
 */
export function insert(sentenceWhereInsert, insertable, position = 0) {
  if (insertable) {
    let result = sentenceWhereInsert.slice(0, position);
    result += insertable;
    result += sentenceWhereInsert.slice(position);
    return result;
  }
  return sentenceWhereInsert;
}
