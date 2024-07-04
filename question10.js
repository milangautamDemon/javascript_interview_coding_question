//how to find unique values from an array in sorted order?
/*
we will be using the array filter method first & check if the element is present  using the indexOf & then we will use the sort method to sort an array elements.
*/
const arrayList = [10, 29, 3, 48, 5, 3, 9, 30, 0, 5, 38, 4, 0, 48, 30, 3];
const uniqueValue = arrayList
  .filter((eachItem, index, arr) => arr.indexOf(eachItem) == index)
  .sort((a, b) => a - b);
console.log(uniqueValue);
