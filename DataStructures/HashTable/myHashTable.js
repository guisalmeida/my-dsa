class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
    // console.log(this.data);
  }

  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];

    for (let i = 0; i < this.data.length; i++) {

      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // console.log(this.data[i].length);

        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0])
        }

      }
    }


    return keysArray;
  }

}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000);
// console.log(myHashTable.get('grapes'));

myHashTable.set('apples', 9);
// console.log(myHashTable.get('apples'));

console.log(myHashTable.keys());