class Person {
  constructor(name,branch) {
    this.name = name;
    this.branch=branch;
  }
  greet() {
    console.log(`Hello, ${this.name}! from ${this.branch} branch.`);
  }
}

const person1=new Person("Ajitesh","CSE");
// person1.name="Madhu";
// console.log(person1.name); // "Madhu"
person1.greet(); // "Hello, Ajitesh! from CSE branch."