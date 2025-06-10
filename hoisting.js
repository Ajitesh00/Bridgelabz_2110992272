console.log(a); // undefined
var a = 5;

// console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
// let b = 10;

// console.log(c); // ❌ ReferenceError: Cannot access 'c' before initialization
// const c = 15;



// Hoisting applies to function declarations, allowing them to be called before they are defined in the code.

hoistedFunction(); // This function is hoisted!

function hoistedFunction() {
    console.log("This function is hoisted!");
}


// sayHello(); // ❌ TypeError: sayHello is not a function

// var sayHello = function () {
//   console.log("Hello!");
// };
// Function expressions are not hoisted, so this will throw an error if called before the definition.