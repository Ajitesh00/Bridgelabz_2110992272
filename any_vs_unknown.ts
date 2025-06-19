// ANY — "Turn Off TypeScript"
// It disables type checking.
// You can assign it to anything, and do anything with it.

let value1: any = "Hello";
value1 = 123; // OK
value1.toUpperCase(); // OK at compile-time (might crash at runtime if not a string)


// UNKNOWN — "Safer Any"
// Can hold any value like any.
// But you can’t use it directly without narrowing or type-checking first.
// Forces you to do a type check before operations — so it's safer.

let value2: unknown = "Hello";
value2 = 123; // OK

// value.toUpperCase(); ❌ Error: Object is of type 'unknown'

if (typeof value2 === "string") {
  console.log(value2.toUpperCase()); // ✅ OK after narrowing
}
