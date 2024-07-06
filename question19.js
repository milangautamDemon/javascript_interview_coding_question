//filter a given object based on certain conditions & return the corresponding object?
/*
we use filter() method to filter the data.
the filter method is used to create a new array with all elements that pass a test (provided as a callback function).
The callback function should return a truthy value to include the element in the filtered array.
*/

const input = {
  workers: [
    {
      name: "ram lal",
      age: 57,
    },
    {
      name: "shyam",
      age: 53,
    },
    {
      name: "hari",
      age: 37,
    },
    {
      name: "gita",
      age: 24,
    },
  ],
};

const oldAgeWorker = input.workers.filter(
  (worker) => (worker.age >= 50 ? worker : "") //condition
);
console.log(oldAgeWorker);
