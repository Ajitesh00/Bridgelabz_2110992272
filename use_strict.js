"use strict"

a=5; // Reference Error (using undeclared variables not allowed)

function f(a, a) {} // SyntaxError (duplicating parameter names not allowed)

const obj = {};
Object.defineProperty(obj, "x", { value: 10, writable: false });
obj.x = 20; // TypeError (assigning to read-only or non-writable properties not allowed)