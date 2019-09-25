/**
 * findMissing - Finds missing term in a arithmetic progression.
 *
 * @example
 * //return 2
 * findMissing([1, 3, 4]);
 * @param {Array<Number>} progression - arithmetic progression
 * with missing term.
 * @return {Number} missing term.
 */
export function findMissing(progression) {
  let lastStep = progression[1] - progression[0];
  for (let i = 2; i < progression.length; i++) {
    const currentStep = progression[i] - progression[i - 1];
    if (Math.abs(currentStep) < Math.abs(lastStep)) {
      return progression[i - 1] - currentStep;
    } else if (Math.abs(currentStep) > Math.abs(lastStep)) {
      return progression[i] - lastStep;
    }
  }
}
