/**
 * traverseTree - Perform recursive traverse of tree.
 *
 * @param {Object} node - current node of tree.
 * @param {Function} adder - executes on each node.
 */
export function traverseTree(node, adder) {
  for (let i = 0; i < node.children.length; i++) {
    traverseTree(node.children[i], adder);
  }
  adder(node);
}
