//checks if two words are an anagram of each other

function checkAnagram(str1, str2) {
    var strArray1 = str1.split("");
    var strArray2 = str2.split("");
    var sortedArray1 = strArray1.sort();
    var sortedArray2 = strArray2.sort();
    if (JSON.stringify(sortedArray1) === JSON.stringify(sortedArray2)) {
        console.log("is an anagram!");
        return true;
    } else {
        console.log("not an anagram!");
        return false;
    }
}

checkAnagram("anagram", "nagaram");
checkAnagram("rat", "car");