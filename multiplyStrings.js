// given an array of strings, find the max value of a pair only if the pair has
// no letters in common it's a little wordy. Prob could make this better

function multiplyStrings(array) {
    let max = 0;
    for (let i = 0; i < array.length - 1; i++) { //map over array
        var index = array[i]; //index of the array
        for (let k = 0; k < array.length; k++) { //map over the array a second time
            if (k !== i) { //we don't want to compare the index to itself
                var nextItem = array[k];
                if ((index.length * nextItem.length) > max && !anythingInCommon(index, nextItem)) {
                    max = index.length * nextItem.length;
                }
            }
        }
    }
    return max;
}

function anythingInCommon(stra, strb) { //function for comparing substrings in a string

    for (var i = 0, len = stra.length; i < len; i++) {
        if (strb.indexOf(stra[i]) != -1) 
            return true;
        }
    return false //nothing in common
}

console.log(multiplyStrings([
    "abcw",
    "baz",
    "foo",
    "bar",
    "xtfn",
    "abcdef"
])); //16
console.log(multiplyStrings([
    "a",
    "ab",
    "abc",
    "d",
    "cd",
    "bcd",
    "abcd"
])); //4
console.log(multiplyStrings(["a", "aa", "aaa", "aaaa"])); //0