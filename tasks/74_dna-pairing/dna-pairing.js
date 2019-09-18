/**
 * pairElement - Makes base pairs by adding missing elements at DNA strand.
 *
 * @example
 * //return [["G", "C"], ["C","G"],["G", "C"]]
 * pairElement("GCG");
 * @param {String} str - sequence of dnas.
 * @return {Array<Array<String>>} base pairs.
 */
export function pairElement(str) {
  const dnas = Array.from(str);
  const pairs = [];
  for (let i = 0; i < dnas.length; i++) {
    switch (dnas[i]) {
      case ('C'):
        pairs.push(['C', 'G']);
        break;
      case ('G'):
        pairs.push(['G', 'C']);
        break;
      case ('A'):
        pairs.push(['A', 'T']);
        break;
      case ('T'):
        pairs.push(['T', 'A']);
        break;
    }
  }
  return pairs;
}
