// Prototype in JavaScript
// In JavaScript, every object has a prototype, which is another object from which it can inherit properties and methods.
// The prototype is a fundamental part of JavaScript's object-oriented programming model, allowing for inheritance and shared behavior among objects.
// The prototype chain is the mechanism by which JavaScript objects inherit features from one another.

let arr=[1,2,3];
console.log(arr.__proto__=== Array.prototype); // true

// Object without prototype

let dict = Object.create(null);
dict.apple = "🍎";
dict.toString = "Oops!";

console.log(dict.apple); // 🍎
console.log(dict.toString); // "Oops!" (not inherited!)
console.log(dict.hasOwnProperty); // undefined 