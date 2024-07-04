//how to find unique values in an array after removing duplicate value?
/*
to find unique values in an array we use the array filter method & check if the value is present using indexOf method */

const arrayList = [10, 29, 3, 48, 5, 3, 9, 30, 0, 5, 38, 4, 0, 48, 30, 3];
const uniqueValue = arrayList.filter(
  (eachItem, index, arr) => arr.indexOf(eachItem) == index
);
console.log(uniqueValue);
