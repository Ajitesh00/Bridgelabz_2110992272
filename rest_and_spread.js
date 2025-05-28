// SPREAD SYNTAX (used to collect remaining arguments into an array)
let a = [1, 2];
let b = [3, 4];
let combined = [...a, ...b];
console.log(combined);  // [1, 2, 3, 4]

// REST PARAMETERS (used to spread elements of an array (or object))
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(5, 10, 15, 20));  // 50