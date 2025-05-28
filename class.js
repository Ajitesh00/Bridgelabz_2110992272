class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

const person1=new Person("Ajitesh");
person1.greet(); // "Hello, Ajitesh!"