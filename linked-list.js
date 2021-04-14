/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    const lastNode = this.tail;

    //check if empty
    if (this.length === 0) {
      return "list is empty";
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return lastNode.val;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next === lastNode) {
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;

        return lastNode.val;
      }
      currentNode = currentNode.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    const oldHead = this.head;
    if (this.length === 0) {
      return "list is empty";
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldHead.val;
    }

    this.head = this.head.next;
    this.length--;
    return oldHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length - 1) {
      return "index out of range";
    }

    let currentNode = this.head;

    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }

    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length - 1) {
      return "index out of range";
    }

    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }

    currentNode.val = val;
  }

  /* Print values in list */
  printList() {
    if (this.length === 0) {
      return "list is empty";
    }

    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    const newNode = new Node(val);
    if (idx === 0 && this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else if (idx > this.length) {
      return "index out of range";
    } else {
      let currentNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next;
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;
      if (this.length === idx) {
        this.tail = newNode
      }
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length - 1) {
      return "index out of range";
    } else if (idx === 0) {
      let currentNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return currentNode.val;
    }

    let currentNode = this.head;

    for (let i = 0; i < idx - 1; i++) {
      currentNode = currentNode.next;
    }

    let returnedNode = currentNode.next;
    currentNode.next = currentNode.next.next;
    this.length--;

    return returnedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;
    if (this.length === 0) {
      return 0;
    }

    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      total += currentNode.val;
      currentNode = currentNode.next;
    }
    return total / this.length;
  }
}

// ///// TESTING
// const dogs = new LinkedList(["poodle", "shnauzer", "bulldog"]);
const nums = new LinkedList([1]);

////// Uncomment this before testing
module.exports = LinkedList;
