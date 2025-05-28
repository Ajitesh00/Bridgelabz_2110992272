// Logical Operators (|| and &&)

// OR (||)
// Returns the first truthy value it finds.
// If all are falsy, returns the last value.
let count = 0;
let result = count || 10;
console.log(result); // Output: 10 (not what you might expect)


// AND (&&)
// Returns the first falsy value it finds.
// If all are truthy, returns the last value.
let isLoggedIn = true && "Welcome!";
console.log(isLoggedIn); // Output: "Welcome!"


// Nullish Coalescing Operator (??) - Returns the right-hand value only if the left-hand side is null or undefined.

let fixed = count ?? 10;
console.log(fixed); // Output: 0 (because 0 is not null or undefined)

let output=null ?? 10;
console.log(output); // Output: 10 (because we have null on the left)