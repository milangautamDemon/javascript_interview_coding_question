//how to chech if the given variable/number is an integer?
/* 
1. to check if a given variable/number is integer we can make use of isNaN() method.

*/

const validateValue = "ram";

if (isNaN(validateValue)) {
  //if true this code will console
  console.log("variable is String!");
} else {
  console.log("variable is Number!");
}

//using !NaN() return oppsite of isNaN()
if (!isNaN(validateValue)) {
  //if true this code will console
  console.log("variable is Number!");
} else {
  console.log("variable is String!");
}
