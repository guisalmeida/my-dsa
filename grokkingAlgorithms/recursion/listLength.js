const arrayLength = (arr) => {
  let len = 0;
  if (!arr[len]) return len;

  return len = arrayLength(arr.splice(1)) + 1;
}

const linkedListLength = (head) => {
  let len = 0;
  if (!head) return len;

  return len = linkedListLength(head.next) + 1;
}

module.exports = {arrayLength, linkedListLength};