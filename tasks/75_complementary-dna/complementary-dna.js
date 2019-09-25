/**
 * DNAStrand - Converts one side of the DNA to the other
 * complementary side in sequence of DNA's sides.
 *
 * @example
 * //return TAACG
 * DNAStrand("ATTGC");
 * @param {String} sequence - sequence of DNAs.
 * @return {String} sequence of complementary sides.
 */
export function DNAStrand(sequence) {
  let result = '';
  for (let i = 0; i < sequence.length; i++) {
    result += dictionary[sequence[i]];
  }
  return result;
}

const dictionary = {
  'C': 'G',
  'G': 'C',
  'A': 'T',
  'T': 'A',
};
