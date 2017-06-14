// Given a number set, return all distinct versions of that set, without
// duplicates probably should sort the sub-array before passing it to the values
// array

function returnDistinctVersions(array) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        let indexAsArray = array[i]
            .toString(10)
            .split("")
            .map(function (t) {
                return parseInt(t)
            });
        resultArray.push(indexAsArray); //first, let's just push each index to the result
    }
    return resultArray;
}

console.log(returnDistinctVersions([1, 2, 3]));