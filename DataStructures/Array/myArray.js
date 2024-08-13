

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {}
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem;
  }

  delete(index) {
    const deletedItem = this.data[index]
    delete this.data[index];
    this.shiftItems(index);
    this.length--;
    return deletedItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
  }
}

const myArray = new MyArray();
myArray.push('hello');
myArray.push('world');
myArray.push('!!!');
myArray.pop();
myArray.delete(0);

console.log(myArray);