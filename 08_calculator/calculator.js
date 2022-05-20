const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((total, currentNumber) => {
    return total += currentNumber;
  }, 0);
};

const multiply = function(a) {
  return a.reduce((total, currentNumber) => {
    return total *= currentNumber;
  }, 1);
};

const power = function(a , b) {
  if(b <= 0){
    return 1;
  }
  else {
    return a*power(a, (b-1));
  }
};

const factorial = function(a) {
	if(a <= 0){
    return 1;
  }
  else {
    return a*factorial((a-1));
  }
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
