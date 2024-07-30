const reverseString = function(word) {
let string = word;
const stringArray = string.split("");
const reverse = stringArray.reverse();
let fullReverse = reverse.join('');
return fullReverse;

// return string.split("").reverse().join("");
 
  
  
};

// Do not edit below this line
module.exports = reverseString;
