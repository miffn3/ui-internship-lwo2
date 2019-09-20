/**
 * addTogether - Sums two arguments together. If only one argument is provided,
 * then returns a function that expects one argument and returns the sum.
 *
 * @example
 * //return 5
 * addTogether(2)(3);
 * @param  {*} requiredOperand - first argument of sum.
 * @param {*} optionalOperand - [optional] second argument of sum. If it haven't
 * provided then returns a function that expects one argument.
 * @return {*} sum of two arguments.
 */
export function addTogether(requiredOperand, optionalOperand) {
  if (typeof requiredOperand !== 'number') {
    return undefined;
  }
  if (optionalOperand === undefined) {
    return (additionalOperand) => {
      if (typeof additionalOperand !== 'number') {
        return undefined;
      }
      return additionalOperand + requiredOperand;
    };
  }
  if (typeof optionalOperand !== 'number') {
    return undefined;
  }
  return requiredOperand + optionalOperand;
}
