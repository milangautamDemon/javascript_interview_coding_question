//how to sort a number array?
/*
to sort an array of numbers we will have to use a comparison method inside the sort method
*/

const unSortedArray = [10, 20, 1, 22, 34, 3, 4, 12, 11];
const sortedArray = unSortedArray.sort((a, b) => a - b);
console.log(sortedArray);
