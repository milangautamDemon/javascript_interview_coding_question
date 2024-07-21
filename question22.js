//how to delete item/element from the array
/*
 to delete item/element we firstly shift the element from the position & delete the last element of the array
 */

let array2 = [1, 2, 3, 46, 6, 43, 65];
const delElePosition = 3;
for (let i = delElePosition; i <= array2.length - 1; i++) {
  array2[i] = array2[i + 1];
}
array2.pop();
console.log(array2);
