//how to find duplicate elements in a given array?

/* 
1. to find duplicates in an array, we can make use of the array filter method.
2. filter method take 3 parameters i.e: eachElement of array, index & array on which filter is applied.
3. then we check for the index of each element & return which ever doesn't match with the index.
*/

const arrayLists = [2, 2, 6, 3, 6, 3, 8, 10, 3];

const duplicates = arrayLists.filter((element, index, arr) => {
  return arr.indexOf(element) !== index; //if we need to remove duplicate & print arr then we can use === incase of !==
});
console.log(duplicates);
