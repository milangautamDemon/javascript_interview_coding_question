//how to find the count of items repeated in the array?

/* 
we will make use of array reduce method & using an object instance we will check if the key value is present in object if yes, increament else return 1. for both number & string same process is apply.
*/

const weeks = [
  "sun",
  "mon",
  "sun",
  "tues",
  "sat",
  "fri",
  "sat",
  "wed",
  "thus",
  "fri",
  "sun",
];
const duplicateValues = weeks.reduce((acc, currentval) => {
  if (acc[currentval] == undefined) {
    acc[currentval] = 1;
    return acc;
  } else {
    acc[currentval]++;
    return acc;
  }
}, {});

console.log(duplicateValues);
