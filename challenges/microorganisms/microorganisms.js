class Microorganism {
  constructor(family, size) {
    this.family = family;
    this.size = size;
    this.next = null;
  }
}

class MicroorganismsLab {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getLargestFamily() {
    while (this.length > 1) {
      let counter = 0;
      let current = this.head;
  
      while (current.next !== null) {
        if (current.size > current.next.size && current.family !== current.next.family) {
          current.size += current.next.size;
          this._remove(counter + 1);
          this.length--
          current = current.next;
          counter++
        } else if (current.size < current.next.size && current.family !== current.next.family) {
          current.next.size += current.size;
          this._remove(counter);
          this.length--
          current = current.next;
        } else {
          current = current.next;
          counter++
        }
      }
    }

    return `${this.head.family} ${this.head.size}`
  }

  append(family, size) {
    const microorganism = new Microorganism(family, size);
    if (this.head === null) {
      this.head = microorganism;
      this.tail = this.head;
      this.length++
      return;
    }

    let current = this.tail;
    current.next = microorganism
    this.tail = current.next
    this.length++
  }

  _remove(index) {
    if (index >= this.length) return;

    if (index === 0) {
      if (this.length === 1) {
        this.tail = null;
      }

      this.head = this.head.next ? this.head.next : null
      this.length--
      return
    }

    let current = this.head
    let count = 0;
    while (count < index - 1) {
      current = current.next;
      count++
    }

    if (index === this.length - 1) {
      current.next = null;
      this.tail = current;
      this.length--;
      return;
    }

    current.next = current.next.next;
    this.length--;
  }
}

const lab = new MicroorganismsLab();

// Names of the bacteria families.
const families = ["A", "B", "C", "B", "B", "A", "C"];
// Sizes of the bacteria families.
const sizes = [5, 5, 2, 10, 4, 6, 7];

for (let i = 0; i < families.length; i++) {
  lab.append(families[i], sizes[i]);
}

console.log(lab.getLargestFamily());
console.log(lab);
// result 'A 34'