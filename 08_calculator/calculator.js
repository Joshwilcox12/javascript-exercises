const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(array) { 

  let total = 0;
  for(let i = 0; i < array.length; i++){
    total+= array[i];
  }
	return total
};

const multiply = function(array) {
 answer = 1;
 for(let i = 0; i < array.length; i++){
  answer*= array[i];
 }
return answer;
};

const power = function(x, y) {
  return x ** y;
	
};

const factorial = function(x) {
  let answer = 1;
  for(let i = 1; i <= x; i++){
    answer *= i;
  }
	return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
