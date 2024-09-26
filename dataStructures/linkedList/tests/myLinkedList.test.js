const LinkedList = require('../myLinkedList');

describe('MyLinkedList', () => {
  let myLinkedList;

  beforeEach(() => {
    myLinkedList = new LinkedList(1);
  });

  describe('Append method', () => {
    it('Should add a value to the end of the list', () => {
      myLinkedList.append(2)
      expect(myLinkedList.tail.value).toBe(2);
    });

    it('Should return length 2 when append a second value to the list', () => {
      myLinkedList.append(2)
      expect(myLinkedList.length).toBe(2);
    });
  });

  describe('Prepend method', () => {
    it('Should add a value to the beginning of the list', () => {
      myLinkedList.prepend(2)
      expect(myLinkedList.head.value).toBe(2);
    });

    it('Should return length 2 when prepend a second value to the list', () => {
      myLinkedList.prepend(2)
      expect(myLinkedList.length).toBe(2);
    });
  });
})