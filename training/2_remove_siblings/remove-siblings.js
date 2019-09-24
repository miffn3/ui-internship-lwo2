/**
 * removeSiblings - Removes all siblings of provided HTML element.
 *
 * @param {HTMLElement} node - HTML element to delete his siblings.
 */
export function removeSiblings(node) {
  let next = node.parentElement.firstChild;
  while (next) {
    let tmp = next.nextSibling;
    if (next !== node) {
      node.parentElement.removeChild(next);
    }
    next = tmp;
  }
}
