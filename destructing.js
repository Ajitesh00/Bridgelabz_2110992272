// DESTRUCTING USING REST
let [x,...y]=[1,2,3,4];
console.log(y);

//NESTED DESTRUCTING
const numbers = [1, [2, 3], 4];

const [a, [b, c], d] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4

//OBJECT DESTRUCTING
const person = { name: "Ajitesh", age: 22 };

const { name, age } = person; 
// person.name → assign this to a new variable called name
// person.age → assign this to a new variable called age
console.log(name); // Ajitesh
console.log(age);  // 22
