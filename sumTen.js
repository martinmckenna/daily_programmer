const getUniquePairs = function uniquePairs(arrayOfPairs) {
    let uniquePairs = [];
    //console.log(arrayOfPairs);
    for (let i = 0; i < arrayOfPairs.length; i++) {
        let arrayWithoutIndex = arrayOfPairs.filter(function (element, index) {
            return index != i;
        });
        for (k = 0; k < arrayWithoutIndex.length; k++) {
            if (arrayOfPairs[i] !== arrayWithoutIndex[k]) {
                console.log(arrayOfPairs[i]);
                uniquePairs.push(arrayOfPairs[i]);
            }
        }
    }
    return uniquePairs;
}

const pairsSumToTen = function getPairs(arrayOfInts) { //takes 2 args: an array of ints and what filter you want to set. Choose from 3: allPairs, uniquePairs, reverseOrderPairs
    let allPairs = []; //used for every pair of numbers that add to ten
    let uniquePairs = []; //used for every pair without duplicates
    let reverseOrderPairs = []; //used for every pair without duplicates after sorting

    for (i = 0; i < arrayOfInts.length; i++) { //map over the array
        let arrayWithoutIndex = arrayOfInts.filter(function (element, index) {
            return index != i;
        });
        for (k = 0; k < arrayWithoutIndex.length; k++) {
            if (arrayOfInts[i] + arrayWithoutIndex[k] === 10) {
                allPairs.push([arrayOfInts[i], arrayWithoutIndex[k]]);
            }
        }
    }
    return allPairs;
}

console.log(pairsSumToTen([
    1,
    1,
    2,
    4,
    4,
    5,
    5,
    5,
    6,
    7,
    9
]));
console.log(getUniquePairs(pairsSumToTen([
    1,
    1,
    2,
    4,
    4,
    5,
    5,
    5,
    6,
    7,
    9
])));