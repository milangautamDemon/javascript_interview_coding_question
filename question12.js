//how to find minimum value in a numbered array?
/*
to find minimum value in a numbered array, we are implementing a method which will find minimum value.
inside the method, we are making use of the array reduce method & for each element we will check if the value is less than the previous one.
*/

const studentId = [10, 12, 3, 4, 5, 8, 0, 4, 73];
const findMinValue = (arr) => {
  return arr.reduce((prev, current) => (prev < current ? prev : current));
};
console.log(findMinValue(studentId));
