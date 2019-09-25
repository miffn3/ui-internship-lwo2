/**
 * expressionMatter - Given three integers a ,b ,c, return the largest number
 * obtained after inserting the following operators and brackets: +, *, ().
 *
 * @example
 * //return 6
 * expressionMatter(2, 1, 2);
 * @param {Number} a - first argument of expression.
 * @param {Number} b - second argument of expression.
 * @param {Number} c - third argument of expression.
 * @return {Number} maximum of possible results.
 */
export function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, a + b * c,
      a * b + c, (a + b) * c, a * (b + c));
}
