/**
 * updateInventory - Updates current store's inventory (first provided array)
 * by information of fresh delivery (second provided array).
 *
 * @example
 * //return [[2, 'Boat']]
 * updateInventory([[1, 'Boat']], [1, 'Boat']);
 * @param {Array<*>} currentInventory - existed inventory.
 * @param {Array<*>} newInventory - fresh delivery.
 * @return {Array<*>} updated inventory.
 */
export function updateInventory(currentInventory, newInventory) {
  const objectInventory = {};
  for (let i = 0; i < currentInventory.length; i++) {
    const curPair = currentInventory[i];
    objectInventory[curPair[1]] = curPair[0];
  }
  for (let i = 0; i < newInventory.length; i++) {
    const curPair = newInventory[i];
    if (objectInventory.hasOwnProperty(curPair[1])) {
      objectInventory[curPair[1]] = objectInventory[curPair[1]] + curPair[0];
    } else {
      objectInventory[curPair[1]] = curPair[0];
    }
  }
  const updatedInventory = [];
  const keys = Object.keys(objectInventory);
  for (let i = 0; i < keys.length; i++) {
    updatedInventory.push([objectInventory[keys[i]], keys[i]]);
  }
  return updatedInventory.sort(sortingPairs);
}

/**
 * sortingPairs - Return -1, 0, 1 depended on lexicographical order
 * of second elements of provided pairs.
 *
 * @example
 * //return -1
 * sortingPairs([100, 'A'], [2, 'B']);
 * @param {Array<*>} pair1 - first pair.
 * @param {Array<*>} pair2 - second pair.
 * @return {Number}
 */
function sortingPairs(pair1, pair2) {
  if (pair1[1] < pair2[1]) {
    return -1;
  }
  if (pair1[1] > pair2[1]) {
    return 1;
  }
  return 0;
}
