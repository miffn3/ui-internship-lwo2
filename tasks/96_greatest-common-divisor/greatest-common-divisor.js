/**
 * greatestCommonDivisor - Finds greates common divisor
 * of two provided numbers.
 *
 * @example
 * //return 9
 * greatestCommonDivisor(36, 45);
 * @param {Number} number1 - first number.
 * @param {Number} number2 - second number.
 * @return {Number} greatest common divisor.
 */
export function greatestCommonDivisor(number1, number2) {
  const factorsOfNumber1 = findFactors(number1);
  const factorsOfNumber2 = findFactors(number2);
  const commonFactors = [];
  for (let i = 0; i < factorsOfNumber1.length; i++) {
    for (let j = 0; j < factorsOfNumber2.length; j++) {
      if (factorsOfNumber1[i] === factorsOfNumber2[j]
        && commonFactors.indexOf(factorsOfNumber1[i]) === -1) {
        commonFactors.push(factorsOfNumber1[i]);
      }
    }
  }
  return Math.max(...commonFactors);
}

/**
 * findfactors - Finds factors of number.
 *
 * @example
 * //return [1, 2, 3, 6]
 * findFactors(6);
 * @param {Number} number - provided number.
 * @return {Array<Number>} factors of number.
 */
function findFactors(number) {
  const factorsOfNumber = [];
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      factorsOfNumber.push(i);
    }
  }
  factorsOfNumber.push(number);
  return factorsOfNumber;
}
