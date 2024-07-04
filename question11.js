//how to find maximum value in a number array?
/*
to find maximum value in a numbered array, we create reuse function that will find the max value.
inside the function/method, we are making use of array reduce method & for each element we will check if the value is greater than the previous one.
 */

//first method
const numberArray = [5, 45, 54, 63, 87, 72, 98, 12, 10];
const maxValue = (arr) => {
  return arr.reduce((prev, current) => (prev > current ? prev : current));
};

//second method
const maximumvalue = (arr) => {
  const sortarr = arr.sort((a, b) => a - b);
  return sortarr[sortarr.length - 1];
};

console.log(maxValue(numberArray));
console.log(maximumvalue(numberArray));
