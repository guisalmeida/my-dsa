// [0,3,4,4,6,30,31]

function mergeSortedArrays(arr1, arr2) {
    const mergedArr = [...arr1, ...arr2]
    return mergedArr.sort((a, b) => {
        return a - b
    })
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));


