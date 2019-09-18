/**
 * addTogether - Sums two arguments together. If only one argument is provided,
 * then returns a function that expects one argument and returns the sum.
 *
 * @example
 * //return 5
 * addTogether(2)(3);
 * @param  {*} a - first argument of sum.
 * @param {*} b - [optional] second argument of sum. If it haven't provided
 * then returns a function that expects one argument.
 * @return {*} sum of two arguments.
 */
export function addTogether(a, b) {
  if (typeof a !== 'number') {
    return undefined;
  }
  if (b === undefined) {
    return (c) => {
      if (typeof c !== 'number') {
        return undefined;
      }
      return c + a;
    };
  }
  if (typeof b !== 'number') {
    return undefined;
  }
  return a + b;
}
