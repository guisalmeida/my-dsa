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
        const index = this._hash(key)
        if(!this.data[index]) {
            this.data[index] = []
        }
        this.data[index].push([key,value])
        return this.data
    }

    get(key) {
        const index = this._hash(key)
        const currentBucket = this.data[index]
        console.log(currentBucket);
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

    keys() {
        const keysArray = []
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }

    keysWithoutCollision() {
        if (!this.data.length) {
          return undefined
        }
        let keysArray = []

        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {

            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                
              // but also loop through all the potential collisions
              if (this.data.length > 1) {
                for (let j = 0; j < this.data[i].length; j++) {
                  keysArray.push(this.data[i][j][0])
                }
              } else {
                keysArray.push(this.data[i][0])
              } 
            }
        }
        return keysArray; 
      }
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000)
myHashTable.set('apples', 9)

console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
