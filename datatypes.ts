let firstname: string = "Ajitesh"; // String
let age: number = 22; // Number
let isStudent: boolean = true; // Boolean
let marks: number[] = [85, 90, 95]; // Array
let data: [string, number, boolean] = ["Ajitesh", 22, true]; // Tuple
data.push("Extra Data"); // Tuple can be extended with additional elements
let anyData: any = "Ajitesh"; // Any type, can hold any value
let unknownData: unknown = "Ajitesh"; // Unknown type, must be checked before use
let nullData: null = null; // Null type
// Object
let person: { name: string; age: number } = {
  name: "Ajitesh",
  age: 22,
};

// Custom type
type user = {
  name: string;
  age: number;
};
let user1: user = {
  name: "Ajitesh",
  age: 22,
};

// printing the values
console.log(firstname, age, isStudent, marks, data, anyData, unknownData, nullData, person, user1);