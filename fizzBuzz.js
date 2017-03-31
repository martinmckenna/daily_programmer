//FIZZ BUZZ: Print 1-100. For multiples of 3, print fizz. Multiples of 5, print Buzz
//TOO EASY

for (var i = 1; i<101;i++){
	if(i%3==0){
  	console.log("Fizz");
  }
  else if(i%5==0){
  	console.log("Buzz");
  }
  else{
  	console.log(i);
  }
}