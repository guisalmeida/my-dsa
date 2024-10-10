class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    // this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      // prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    // newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    // this.head.prev = newNode
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      return
    }

    const newNode = new Node(value);

    if (index === 0) {
      this.prepend(value);
      return;
    }

    let currentNode = this.head
    let count = 0;

    while (count < index - 1) {
      currentNode = currentNode.next;
      count++
    }

    if (!currentNode.next) {
      // newNode.prev = currentNode;
      currentNode.next = newNode;
      this.length++;
      return;
    }

    // newNode.prev = currentNode;
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index >= this.length) return;

    if (index === 0) {
      if (this.length === 1) {
        this.tail = null
      }

      this.head = this.head.next ? this.head.next : null
      this.length--
      return
    }

    let currentNode = this.head
    let count = 0;
    while (count < index - 1) {
      currentNode = currentNode.next;
      count++
    }

    if (index === this.length - 1) {
      currentNode.next = null;
      this.tail = currentNode;
      this.length--;
      return;
    }

    currentNode.next = currentNode.next.next ? currentNode.next.next : null;
    currentNode.next.prev = currentNode;
    this.length--;
  }

  reverse() {
    if (this.length <= 1) {
      return
    }

    let first = this.head;
    this.tail = this.head;

    let second = first.next;

    while (second) {
      let temp = second.next;

      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
  }

  printList() {
    const array = []
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }

    return array;
  }
}

module.exports = LinkedList;

