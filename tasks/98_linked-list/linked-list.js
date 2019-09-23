export class LinkedList {
  constructor() {
    this.amount = 0;
    this.head = null;
    this.tail = null;
  }
  push(nextValue) {
    const nextNode = {
      value: nextValue,
      next: null,
      prev: null,
    };
    if (this.amount === 0) {
      this.head = nextNode;
      this.tail = nextNode;
    } else if (this.amount === 1) {
      nextNode.prev = this.head;
      this.tail = nextNode;
      this.head.next = this.tail;
    } else {
      const tmp = this.tail;
      this.tail = nextNode;
      tmp.next = this.tail;
      this.tail.prev = tmp;
    }
    this.amount++;
  }
  pop() {
    if (this.amount === 1) {
      const tmp = this.head;
      this.head = null;
      this.tail = null;
      this.amount--;
      return tmp.value;
    } else if (this.amount === 2) {
      const tmp = this.tail;
      this.head.next = null;
      this.tail = this.head;
      this.amount--;
      return tmp.value;
    } else {
      const tmp = this.tail;
      const tmpPrev = this.tail.prev;
      tmpPrev.next = null;
      this.tail = tmpPrev;
      this.amount--;
      return tmp.value;
    }
  }
  iterate(func) {
    let cur = this.head;
    for (let i = 0; i < this.amount; i++) {
      func(cur);
      cur = cur.next;
    }
  }
  insertAfter(existValue, newValue) {
    let neededNode;
    this.iterate((node) => {
      if (node.value === existValue) {
        neededNode = node;
      }
    });
    if (!neededNode) {
      return false;
    }
    const newNode = {
      value: newValue,
      next: neededNode.next,
      prev: neededNode,
    };
    neededNode.next.prev = newNode;
    neededNode.next = newNode;
    return true;
  }
  removeItem(existValue) {
    let neededNode;
    this.iterate((node) => {
      if (node.value === existValue) {
        neededNode = node;
      }
    });
    if (!neededNode) {
      return false;
    }
    if (neededNode.prev !== null) {
      neededNode.prev.next = neededNode.next;
    }
    if (neededNode.next !== null) {
      neededNode.next.prev = neededNode.prev;
    }
    return true;
  }
}
