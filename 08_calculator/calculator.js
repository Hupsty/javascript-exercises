const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce(function(total, current) {
    return total + current;
  }, 0)
};

const multiply = function(array) {
  return array.reduce(function (total, current) {
    return total * current;
  })
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
