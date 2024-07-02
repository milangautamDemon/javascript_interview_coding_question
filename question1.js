//how to define a class with properties & methods in javascript?

/* A class declared with a name which acts as its identifier. we can use the name to create new objects using the keyword new */

class Car {
  constructor(model, name) {
    (this.model = model), (this.name = name);
  }
  description() {
    console.log(`Name of the car is ${this.name} & model is ${this.model}.`); //here `${}` is template strings(template literals) which was introduced in es6
  }
}

const bmw = new Car("s5", "sport");
bmw.description();
