//how to find the average of the numbers in the numbered array?
/*
using the array reduce method we will get the total count first & then we will get the total length of the array.
divide the total sum with the lengh of the array & we get the average of the numbers in the array
*/

const arr = [5, 4, 3, 32, 34, 56, 93];
const totalCount = arr.reduce((a, b) => a + b, 0);
const arrLength = arr.length;
const averageVal = totalCount / arrLength;
console.log(averageVal);
