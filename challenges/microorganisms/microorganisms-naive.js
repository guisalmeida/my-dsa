// Names of the bacteria families.
const families = ["A", "B", "C", "B", "B", "A", "C"];
// Sizes of the bacteria families.
const sizes = [5, 5, 2, 10, 4, 6, 7];

function largestFamily(familiesArr, sizesArr) {
  let index = 1;
  let lastFamily = null;

  while (sizesArr.length > 1) {
    if (index + 1 < sizesArr.length && familiesArr[index] === lastFamily) {
      index++;
      continue;
    }

    if (sizesArr[index - 1] > sizesArr[index]) {
      lastFamily = familiesArr[index - 1];

      sizesArr[index - 1] += sizesArr[index]

      sizesArr.splice(index, 1);
      familiesArr.splice(index, 1);
    } else if (sizesArr[index - 1] < sizesArr[index]) {
      lastFamily = familiesArr[index];

      sizesArr[index] += sizesArr[index - 1]

      sizesArr.splice(index - 1, 1);
      familiesArr.splice(index - 1, 1);
    }

    if (index + 1 >= sizesArr.length) {
      index--;
    } else {
      index++
    }
  }

  return `${familiesArr[0]} ${sizesArr[0]}`;
}

// console.log(largestFamily(families, sizes));
// result 'A 34'

module.exports = largestFamily;