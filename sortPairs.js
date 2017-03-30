//iterate by twos in an array and sort the pair

var testArray = [1, 4, 3, 2, 6, 5];

function sortArray(array){
	for(var i = 0; i < array.length - 1; i++){ //loops through every item in the array besides for the last element
  	index = array[i]; //grabs the item at a whatever index we're at in the loop
  	nextItem = array[i+1]; //grabs the next item after the one we're looking at
    if (nextItem < index){
    	array.splice(i, 1); //remove the index
      array.splice(i+1, 0, index); //add the index back in the correct place
    }
  }
  console.log(array);
}

sortArray(testArray);