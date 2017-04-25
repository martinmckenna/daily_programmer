// multiplies all the values of the array besides for the current index. maps
// over the array and filters out the index then multiplies 
//assumes the array won't be zero.
//April, 25th, 2017
//Author: Martin McKenna

function getProductsSansIndex(array) {
    var finalAnswer = []; //gonna put each product in here
    var result = array.map(function (currentVal, currentIndex) { //map over the array
        var product = array.filter(function (filteredValue, filteredIndex) { //filter out the index
            return filteredIndex !== currentIndex; //get the values where the current place in the map are not equal to the current place in the filter
        })
            .reduce(function (total, currentValue) { //multiply the array values
                return total * currentValue;
            });
        finalAnswer.push(product); //push the final product to the final answer
    });
    return finalAnswer;
}

console.log(getProductsSansIndex([1, 7, 3, 4])); //84, 12, 28, 21
console.log(getProductsSansIndex([5, 3, 4, 5])); //60, 100, 75, 60