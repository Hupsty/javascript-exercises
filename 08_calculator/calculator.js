const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	let sum = 0;
  if (array == '') return 0;
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  }
  return sum;
};

const multiply = function(array) {
  let answer = 0;
    for (let i = 0; i < array.length; i++) {
      if (i == 0) {
        answer = array[0];
        continue;
      }
        answer = answer * array[i];
    }
  return answer;
};

const power = function(x, y) {
  return Math.pow(x, y);
};

const factorial = function(x) {
	if (x == 0) return 1;
  if (x == 1) return 1;
  let factorial = 1;
  for (let i = x; i > 1; i--) {
    factorial = factorial * i;
  }
  return factorial
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
