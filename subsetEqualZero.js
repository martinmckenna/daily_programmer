//Do two elements in a given array of ints equal to zero? Return true if so
//also return true if zero appears in the array

function subsetEqualZero(array){
  for(let i=0; i<array.length; i++){
    let index = array[i];
    if(index===0){
      return true;
    }
    let newArray = array.filter(function(element){return element !== index}); //cut out the index becuase we're going to add index to other entries
    for(let k=0; k<newArray.length; k++){
      if(index+newArray[k] === 0){
        return true;
      }
    }
  }
  return false;
}

console.log(subsetEqualZero([1, 2, -3, 3])); //true
console.log(subsetEqualZero([-3, 1, 3])); //true
console.log(subsetEqualZero([-3, -6, 5, 6])); //true
console.log(subsetEqualZero([-3, -6, 0, 6])); //true
console.log(subsetEqualZero([-3, -6, 4, 0])); //true
console.log(subsetEqualZero([-6, -1, 1, 3, 4, 5])); //true
console.log(subsetEqualZero([-6, 7, 1, 1, 3, 4, 5])); //false