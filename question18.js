//how can you extract a few fields from the given json object & form a new array ?
/*
we will need to use the map() method, we will pass the element & then return only the required key from the element
*/

const input = {
  student: [
    {
      name: "ram",
      address: "ktm",
      roll: 2,
    },
    {
      name: "hari",
      address: "btl",
      roll: 5,
    },
  ],
};

const optionField = input.student.map((item) => {
  let studentObj = {
    name: item.name,
    address: item.address,
  };
  return studentObj;
});

console.log(optionField);
