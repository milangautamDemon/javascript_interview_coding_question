//how to implement class inheritance in javascript?

/* A class can be extended by another class & the new class will inherit all of its parent class methods using extends key */

class Car {
  constructor(name, model, startTime, endTime) {
    this.name = name;
    this.model = model;
    this.startTime = startTime;
    this.endTime = endTime;
  }
  start() {
    return `${this.name} which model ${this.model} started at ${this.startTime}`;
  }
}

class ElectricCar extends Car {
  constructor(name, model, startTime, endTime) {
    super(name, model, startTime, endTime);
  }
  end() {
    console.log(`${this.start()} and end at ${this.endTime}`);
  }
}

teslaCar = new ElectricCar("tesla", "m2", Date.now(), Date("08/02/2024"));
teslaCar.end();
