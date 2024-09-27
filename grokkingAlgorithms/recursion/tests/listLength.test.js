const { arrayLength, linkedListLength } = require('../listLength');
const LinkedList = require('../../../dataStructures/linkedList/myLinkedList');

describe('Array length function using recursion', () => {
  it('Should return 3', () => {
    const arr = [2, 4, 6, 4, 5]
    expect(arrayLength(arr)).toBe(5);
  });

  it('Should return 0 when receive an empty list', () => {
    const arr = []
    expect(arrayLength(arr)).toBe(0);
  });
})

describe('Linked List length function using recursion', () => {
  it('Should return length of 2', () => {
    const myLinkedList = new LinkedList(1);
    myLinkedList.append(2);
    myLinkedList.append(3);

    expect(linkedListLength(myLinkedList.head)).toBe(3);
  });

})