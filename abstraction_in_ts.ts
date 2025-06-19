// Abstract class Animal
abstract class Animal {
  constructor(public name: string) {}

  // Abstract method – must be implemented by subclasses
  abstract makeSound(): void;

  // Concrete method – shared behavior
  move(): void {
    console.log(`${this.name} moves`);
  }
}

// Subclass Dog that extends Animal
class Dog extends Animal {
  constructor(name: string) {
    super(name); // Call the parent constructor
  }
  // Implementing the abstract method
  makeSound(): void {
    console.log("Woof!");
  }
}

// Example usage
const myDog = new Dog("Buddy");

myDog.makeSound(); // Output: Woof!
myDog.move();      // Output: Buddy moves
