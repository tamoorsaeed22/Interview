function findDifferentNumbers(arrayOne, ArrayTwo) {
    let result = [];

    for (let i = 0; i < arrayOne.length; i++) {
        if (!ArrayTwo.find(element => element === arrayOne[i])) {
            result.push(arrayOne[i]);
        }
    }

    return result;
}

const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [3, 4, 5, 6, 7];

const result = findDifferentNumbers(arrayOne, arrayTwo);
console.log(result);
