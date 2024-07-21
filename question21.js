//how to insert new item/element in the array
/*
to insert new element/item we use inbuild splice method.
also, we can use our logic to insert element. first we required position & element to insert. we use loop (for or while) itteration from last in array then increase the index untill we find position. lastly we insert the new element in the position.
 */

let array1 = [2, 4, 5, 6, 7, 23, 43, 45, 9];
const postion = 2;
const newElement = 2222;
//loop
for (i = array1.length - 1; i >= postion; i--) {
  array1[i + 1] = array1[i];
}
array1[postion] = newElement;
console.log(array1);
