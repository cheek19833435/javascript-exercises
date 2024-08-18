const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	return arr
    .reduce((total,currentItem) => total+=currentItem,0)
};

const multiply = function(arr) {
  return arr
    .reduce((total,currentItem) => total*=currentItem)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
  let total = num
  if (num==0){
    return 1
  } else if (num==1) {
    return 1
  } else {
      while (num>0){
        num-=1
        if (num==1){
          return total
        }
        total*=num
        console.log(total)
      }
      return total
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
