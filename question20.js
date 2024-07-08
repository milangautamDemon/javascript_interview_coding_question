//how to reverse elements in the array?
/*
1. One common method to reverse elements is by creating a new empty array and inserting each element from the original array into the new array from last to first using the push method. However, this approach is not efficient due to its high memory usage.
2. Another effective and efficient method to reverse elements in an array involves using a single temporary variable. Here's a straightforward explanation:

    *Initialization: Begin by initializing two pointers or indices: start at the beginning (index 0) and end at the end (last index) of the array.

    *Iteration: Iterate through the array using a loop. During each iteration:
        Swap Operation: Swap the element at the start index with the element at the end index using a temporary variable.
        Move Pointers: Move the start pointer forward (increment) and the end pointer backward (decrement) to continue the process toward the center of the array.

    *Completion: Continue this process until the start pointer surpasses the end pointer.

This method effectively reverses the array in-place without creating a new array or consuming excessive memory. It also minimizes the number of iterations required, making it both efficient and straightforward.
*/

const arrayLists = [1, 2, 3, 4, 5, 6, 7, 8];
let start = 0;
let end = arrayLists.length - 1;
let storeElement;

while (start < end) {
  storeElement = arrayLists[start];
  arrayLists[start] = arrayLists[end];
  arrayLists[end] = storeElement;

  end = end - 1;
  start = start + 1;
}
console.log(arrayLists);
