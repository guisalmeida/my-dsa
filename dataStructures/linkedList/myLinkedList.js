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

  // Todo reverse
  reverse() {
    // let temp;

    // for (let index = 0; index < this.length; index++) {
    //   let currentNode = {...this.head};
    //   let counter = this.length;

    //   while (counter > index + 1) {
    //     currentNode = currentNode.next;
    //     counter--;
    //   }
    //   console.log(currentNode.value);

    //   if (!temp) {
    //     temp = {...currentNode};
    //     continue
    //   }
    //   temp.next = {...currentNode};
    //   temp = temp.next;
    // }

    // this.head = temp;

    let temp = { ...this.tail };
    let currentNode = { ...this.head };

    while (currentNode !== null) {



      let pivot = { ...currentNode }


      
      temp = temp.next;




      currentNode = currentNode.next;
    }

    this.head = temp;
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

// let myLinkedList = new LinkedList(10);

// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.append(22);
// myLinkedList.prepend(1);
// myLinkedList.prepend(33);
// myLinkedList.insert(1, 100);
// myLinkedList.insert(5, 222);
// myLinkedList.insert(0, 8);
// myLinkedList.insert(0, 7);
// myLinkedList.remove(1);
// myLinkedList.remove(8);

// console.log(myLinkedList.printList());
// myLinkedList.reverse();
// console.log(myLinkedList.printList());
// console.log(myLinkedList);
