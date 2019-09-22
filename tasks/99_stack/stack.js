export class Stack {
  constructor() {
    this.isEmpty = true;
    this.size = 0;
  }
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
  pop() {
    if (!this.isEmpty) {
      this.size--;
      if (this.size === 0) {
        this.isEmpty = true;
        return this.last.value;
      }
      this.last = this.last.prev;
      return this.last.value;
    }
  }
}
