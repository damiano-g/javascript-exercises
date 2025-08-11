const add = function(a, b) {
	return Number(a) + Number(b);
};

const subtract = function(a, b) {
	return Number(a) - Number(b);
};

const sum = function(arr) {
	let res = 0;

  for(let i=0; i < arr.length; i++){
    res += arr[i];
  }

  return res;
};

const multiply = function(numArr) {
  if(numArr.length < 1) return 0;

  let res = numArr[0];

  for(let i=1; i < numArr.length; i++){
    res *= Number(numArr[i]);
  }

  return res;
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(num) {

  if(num <= 1) return 1;

  let res = num;

  for(let i=num-1; i > 0; i--){
    res *= i;
  }

  return res;
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
