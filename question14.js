//how can you uppercase the first character in a string arrany?
/*
to capitalize the first character of every element in the array, we will have to get the first charcter using charAt method.
and then appy the to uppercase & find we will concatenate all the other characters using substr(1).
*/
const days = ["sunday", "monday", "tuesday"];
let updatedDays = [];
for (let day of days) {
  day = day.charAt(0).toUpperCase() + day.substring(1);
  updatedDays.push(day);
}
console.log(updatedDays);
