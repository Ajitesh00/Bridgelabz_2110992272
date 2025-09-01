// A decorator is just a function
function log(target, key, descriptor) {
  let original = descriptor.value;
  descriptor.value = function (...args) {
    console.log(`Calling ${key} with`, args);
    return original.apply(this, args);
  };
  return descriptor;
}

class Calculator {
  @log
  add(a, b) {
    return a + b;
  }
}

let calc = new Calculator();
console.log(calc.add(2, 3));