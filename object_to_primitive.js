let obj = {
  name: "Ajitesh",
  toString() {
    return "👋 Hello";
  },
  valueOf() {
    return 42;
  }
};

console.log(String(obj)); // '👋 Hello' → toString() used
console.log(Number(obj)); // 42 → valueOf() used
console.log(obj + 1);     // 43 → valueOf() used