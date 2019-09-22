/**
 * squares - Calculates how many number between 1 and provided number
 * can be represented as the difference of two perfect squares.
 *
 * @example
 * //return 3
 * squares(4);
 * @param {Number} limit - checks between 1 and this number.
 * @return {Number} possible variants.
 */
export function squares(limit) {
  let impossibleCount = 0;
  for (let i = 2; i <= limit; i += 2) {
    const factor = i / 2;
    if (factor % 2 !== 0) {
      impossibleCount++;
    }
  }
  return limit - impossibleCount;
}
