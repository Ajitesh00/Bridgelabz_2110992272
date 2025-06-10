// Optional chaining (?.) is a safe way to access deeply nested properties of an object without having to check 
// if each reference in the chain exists.

let user = {
  name: "Ajitesh",
  address: {
    city: "Hisar"
  }
};

console.log(user.address?.city);     // "Hisar"
console.log(user.contact?.phone);    // undefined (no crash)
// console.log(user.contact.phone);  // TypeError: Cannot read properties of undefined