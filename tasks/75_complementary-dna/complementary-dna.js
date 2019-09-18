/**
 * DNAStrand - Converts one side of the DNA to the other
 * complementary side in sequence of DNA's sides.
 *
 * @example
 * //return TAACG
 * DNAStrand("ATTGC");
 * @param {String} str - sequence of DNAs.
 * @return {String} sequence of complementary sides.
 */
export function DNAStrand(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case ('C'):
        result += 'G';
        break;
      case ('G'):
        result += 'C';
        break;
      case ('A'):
        result += 'T';
        break;
      case ('T'):
        result += 'A';
        break;
    }
  }
  return result;
}
