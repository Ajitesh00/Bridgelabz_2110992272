// Child classes can override methods of the parent class.
class Vehicle {
  move(): void {
    console.log("The vehicle is moving");
  }
}

class Bike extends Vehicle {
  move(): void {
    console.log("The bike is zooming");
  }
}

class Car extends Vehicle {
  move(): void {
    console.log("The car is driving");
  }
}

const b = new Bike();
b.move(); // The bike is zooming
