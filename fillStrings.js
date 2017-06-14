// Write a program that takes an array of strings and outputs them rows with `x`
// as a fill letter. If the string ends with `x` like `fox` the next fill letter
// should become `z`

// NOTE: This is overly complicated. Should just sort the array by length and
// then find the highest length that way

const outputArray = function fillWords(array) { //gonna start setting setting fns as variables b/c AirBnB says it's good practice?
    let longestLength = 0;
    let amountToBeFilled = 0;
    let result = [];
    for (let i = 0; i < array.length; i++) { //we need to find which string in the array is the longest
        if (array[i].length > longestLength) {
            longestLength = array[i].length; //this will be useful later b/c we know how many spaces to fill
        }
    }
    for (let k = 0; k < array.length; k++) { //map over the array again but this time add the 'x's
        amountToBeFilled = longestLength - array[k].length; //how many spaces do we need to fill?
        let stringToArray = array[k].split("");
        let originalStrLength = stringToArray.length;
        stringToArray.length = longestLength; //make all strings the same length
        let lastLetterOfOriginalStr = stringToArray[originalStrLength - 1]; //gotta check if the last letter isn't already x
        if (lastLetterOfOriginalStr === 'x') {
            stringToArray.fill('z', originalStrLength, originalStrLength + 1); //if the last letter is x, insert a 'z' first
            originalStrLength = originalStrLength + 1;
        }
        stringToArray.fill('x', originalStrLength, stringToArray.length); //then fill the rest with 'x'
        stringToArray = stringToArray.join(''); //make the array a string once more
        result.push(stringToArray); //push the thing to the result array
    }
    return result; //return the thing
}

console.log(outputArray(['cow', 'fox', 'hound', 'fish']));
console.log(outputArray(['snake', 'hellox', 'peopleed', 'lol']));