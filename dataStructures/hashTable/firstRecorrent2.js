//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function findFirstRecurrent2(array) {
  if (!array || array.length <= 1) return undefined
  const hashTable = {}

  for (const element of array) {
    if (hashTable[element] === element) {
      return element;
    }
    hashTable[element] = element;
  }

  return undefined;
}

module.exports = findFirstRecurrent2;