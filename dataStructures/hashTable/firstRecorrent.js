//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    if (input.length <= 1) return undefined

    for (let i = 0; i < input.length; i++) {
        let checkedNumbers = []
        for (let j = i + 1; j < input.length; j++) {
            if (checkedNumbers.includes(input[j])) {
                return input[j]
            } else if (input[i] === input[j]) {
                return input[i]
            } else {
                checkedNumbers.push(input[j])
            }
        }
    }
    return undefined
}


const arr1 = [2, 5, 1, 5, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(arr1));

const arr2 = [2, 1, 3, 1, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(arr2));

const arr3 = [2, 3, 4, 5];
console.log(firstRecurringCharacter(arr3));