const { arrayBigValue,linkedBigValue } = require('../biggest');
const LinkedList = require('../../../dataStructures/linkedList/myLinkedList');

describe('Array biggest value function using recursion', () => {
  it('Should return 6', () => {
    const arr = [2, 4, 6, 4, 5]
    expect(arrayBigValue(arr)).toBe(6);
  });

  it('Should return 0 when receive an empty list', () => {
    const arr = []
    expect(arrayBigValue(arr)).toBe(0);
  });
})

describe('Linked List biggest value function using recursion', () => {
  it('Should return length of 3', () => {
    const myLinkedList = new LinkedList(1);
    myLinkedList.append(2);
    myLinkedList.append(3);

    expect(linkedBigValue(myLinkedList.head)).toBe(3);
  });

})