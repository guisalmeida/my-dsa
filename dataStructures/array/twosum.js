
var twoSum = function (nums, target) {
    if (nums.length < 2 || typeof target !== 'number') return

    let result

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                result = [i, j]
                return result
            }
        }
    }
};

console.log(twoSum([0,4,3,0], 0));