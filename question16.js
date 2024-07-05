//how to check if an array contains any element of another array?
/*
to check if the array contains element in another array, we will make use of the array includes method to see if it includes any values from the array
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 6, 0];
const result = arr1.some((ele) => arr2.includes(ele));
console.log(result);
