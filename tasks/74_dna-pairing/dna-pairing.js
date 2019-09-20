/**
 * pairElement - Makes base pairs by adding missing elements at DNA strand.
 *
 * @example
 * //return [["G", "C"], ["C","G"],["G", "C"]]
 * pairElement("GCG");
 * @param {String} sequence - sequence of DNAs.
 * @return {Array<Array<String>>} base pairs.
 */
export function pairElement(sequence) {
  const pairs = [];
  for (let i = 0; i < sequence.length; i++) {
    pairs.push([sequence[i], dictionary[sequence[i]]]);
  }
  return pairs;
}

const dictionary = {
  'C': 'G',
  'G': 'C',
  'A': 'T',
  'T': 'A',
};
