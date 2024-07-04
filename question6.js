//explain the difference between object.freeze() vs constant?
/*
const applies to binding("variables"). it creates an immutable binding, i.e. you cannot assign a new value to the binding.
object.freeze() works on values, & more specifically, object values. it makes an object immutable, i.e. you cannot change its properties. it show error when used with use strict mode. 
*/
"use strict"; // by appling this we get this output: TypeError: Cannot assign to read only property 'address' of object '#<Object>'

let student = {
  address: "ktm",
};
Object.freeze(student);
student.address = "new york";
console.log(student); //output: {address: "ktm"} doesn't change the value & also don't give any error

const name = "ram";
name = "shyam";
console.log(name); //output: TypeError: Assignment to constant variable.
