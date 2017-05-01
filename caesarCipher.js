//caesar cipher. Gotta make this better

const cipherPhrase = function(word, shift){
  let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  let wordToArray = word.toLowerCase().split('');
  let cipheredWord = [];
  for(let i = 0; i<wordToArray.length; i++){
     var currentValue = wordToArray[i];
     if(currentValue === " "){
       cipheredWord.push(" ");
     }
    else{
     var findInAlpha = alphabet.indexOf(currentValue);
     var newLetter = alphabet[findInAlpha + shift];
     cipheredWord.push(newLetter);
    }
  }
  return cipheredWord.join("");
  };


console.log(cipherPhrase("phiLly dev", 5));