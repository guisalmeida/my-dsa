const arrayBigValue = (arr) => {
  if (!arr.length) return 0;

  let bigger = arr[0];
  if (arr.length === 1) return bigger;

  const nextValue = arrayBigValue(arr.splice(1))
  if (bigger < nextValue) {
    bigger = nextValue;
  }

  return bigger;
}

const linkedBigValue = (head) => {
  if (!head) return 0;

  let bigger = head.value;
  if (!head.next) return bigger;

  const nextValue = linkedBigValue(head.next)
  if (bigger < nextValue) {
    bigger = nextValue;
  }

  return bigger;
}

module.exports = { arrayBigValue, linkedBigValue };
