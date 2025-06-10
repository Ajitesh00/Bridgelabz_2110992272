class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
  greet(name){
    console.log(`Hello, I am ${this.name}.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
  greet(name) {
    super.greet(name); // calls parent method
    console.log(`I am a ${this.breed}.`);
  }   
}

const d = new Dog("Rocky", "Labrador");
d.speak(); // Rocky barks.
d.greet();