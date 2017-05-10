// Take the following inputs in shorthand range, and translate them to longhand
// range. 1,6,4,9,1,6 => [1, 6, 14, 19, 21, 26] 2,9..9,9 => [2, 9, 10, 11, 12,
// 13, 14, 15, 16, 17, 18, 19, 29] 5,7,0,1,9,4 => [5, 7, 10, 11, 19, 24]

function convertToLonghand(array) {
    let firstDigit = 1; //this number will get put in front of the low number
    for (let i = 1; i < array.length; i++) {
        let index = array[i];
        let beforeIndex = array[i - 1];
        let lastDigit = beforeIndex % 10; //get the last digit in a number
        if (beforeIndex !== 9 && lastDigit == 9 && beforeIndex >= index) { //if that prev number ends in 9 but isn't just 9
            firstDigit = firstDigit + 1;
            newIndex = parseInt(firstDigit + '' + index);
            array.splice(i, 1, newIndex); //get rid of the index and add a number to the tens place
        } else if (beforeIndex >= index) {
            newIndex = parseInt(firstDigit + '' + index);
            array.splice(i, 1, newIndex);
        }
    }
    return array;
}

console.log(convertToLonghand([
    1,
    6,
    4,
    9,
    1,
    6
])); //[1, 6, 14, 19, 21, 26]
console.log(convertToLonghand([
    2,
    9,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    9
])); //[2, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 29]
console.log(convertToLonghand([
    5,
    7,
    0,
    1,
    9,
    4
])); //[5, 7, 10, 11, 19, 24]
console.log(convertToLonghand([
    2,
    9,
    9,
    9,
    9,
    9
])); //[2, 9, 19, 29, 39, 49]