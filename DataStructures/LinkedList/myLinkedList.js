class Node {
  constructor(value) {
    this.value = value;
    this.next = null

  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
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

  insert(index, value) {
    if (index >= this.length) {
      return
    }

    const newNode = new Node(value);
    let currentNode = this.head

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode
      this.length++
      return
    }

    let count = 0;

    while (count < index - 1) {
      currentNode = currentNode.next;
      count++
    }

    if (!currentNode.next) {
      currentNode.next = newNode
      this.length++;
      return;
    }

    newNode.next = currentNode.next
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
    this.length--;
  }
}

let myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(22);
myLinkedList.prepend(1);
myLinkedList.prepend(33);
myLinkedList.insert(2, 100);
myLinkedList.insert(5, 222);
myLinkedList.insert(0, 8);
myLinkedList.insert(0, 7);
myLinkedList.remove(9);
myLinkedList.remove(8);

console.log(myLinkedList.printList());
console.log(myLinkedList.tail);

module.exports = LinkedList;