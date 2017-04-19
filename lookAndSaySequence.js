function countAndSay(n) {
    if (n === 1) { //if you're looking for the first interval, it's 1, dummy
        let finalAnswer = 1;
        return finalAnswer;
    } else {
        var finalAnswer = 11; //start as the 2nd interval, since we already took care of the first
        for (var i = 2; i < n; i++) { //do this n number of times starting at the 2nd interval
            var count = 1; //this will be the amount of times a number appears in a row
            var answerAsArray = []; //this will end up being the final answer in array form
            var finalToArray = finalAnswer //turn our number into an array of ints
                .toString(10)
                .split("")
                .map(function (t) {
                    return parseInt(t)
                }); //change the inital number to an array of digits
            for (var k = 0; k < finalToArray.length; k++) { //maps over the array of digits
                var index = finalToArray[k]; //index of the array
                var nextItem = finalToArray[k + 1]; //number after the index in the array
                if (index === nextItem) { //update the count if their equal.
                    count++;
                } else { //if we have two unmatching numbers, push the count and what number it is to the final answer and move on
                    answerAsArray.push(count, index);
                }
            }
            var newFinalNumber = answerAsArray.join(""); //turn that answer array into a string
            finalAnswer = parseInt(newFinalNumber); //turn the string into an int
        }
        return finalAnswer; //return that bad boy
    }

}

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));

// Basic instructions: must compare index to next number if they are equal,
// update the count if they're not equal, push the count to an array along with
// the index do this the amount of times of n -DONE print array[n] ==
// finalAnswer return either 1 or final array to number