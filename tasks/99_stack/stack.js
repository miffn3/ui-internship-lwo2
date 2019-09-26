/**
 * Stack - Class that represents data structure.
 */
export class Stack {
  constructor() {
    this.isEmpty = true;
    this.size = 0;
  }
  /**
   * push - Add element on top of stack.
   *
   * @param {Number} node - provided node value.
   */
  push(node) {
    this.size++;
    if (this.isEmpty) {
      this.last = {
        value: node,
        prev: undefined,
      };
      this.isEmpty = false;
    } else {
      const template = this.last;
      this.last = {
        value: node,
        prev: template,
      };
    }
  }
  /**
   * pop - Removes and returns element on top of stack.
   *
   * @return {Number} - element on top of stack.
   */
  pop() {
    if (!this.isEmpty) {
      this.size--;
      if (this.size === 0) {
        this.isEmpty = true;
        return this.last.value;
      }
      const tmp = this.last;
      this.last = this.last.prev;
      return tmp.value;
    }
  }
}
