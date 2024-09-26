const sum = (arr = []) => {
  // base case
  if (arr.length === 0) {
    return 0
  }else if (arr.length === 1) {
    return arr[0]
  }

  let total = arr[0]

  return total + sum(arr.splice(1))
}

module.exports = sum;