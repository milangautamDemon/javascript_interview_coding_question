const arrayList = [10, 29, 3, 48, 5, 3, 9, 30, 0, 5, 38, 4, 0, 48, 30, 3];
const uniqueValue = arrayList
  .filter((eachItem, index, arr) => arr.indexOf(eachItem) == index)
  .sort((a, b) => a - b);
console.log(uniqueValue);
