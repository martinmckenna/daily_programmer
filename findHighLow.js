//finds the highest and lowest value in a set of intervals

//test arrays
arr1 = [100,6];
arr2 = [45,2333];
arr3 = [1, 5000];
arr4 = [0, 5];

function findHighLow(...arrays){//takes an unlimited amount of arrays
  var result = [].concat(...arrays);
  var min = Math.min.apply(Math, result);
  var max = Math.max.apply(Math, result);
  var res = [min, max];
  return res;
}

console.log(findHighLow(arr1, arr2, arr3, arr4));