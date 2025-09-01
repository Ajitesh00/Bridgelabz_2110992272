// Built-in iterable (Array)
let arr = [10, 20, 30];
for (let val of arr) {
  console.log(val); // 10, 20, 30
}

// Built-in iterable (String)
let str = "Hi";
for (let ch of str) {
  console.log(ch); // H, i
}

// Custom iterable
let myIterable = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
};

for (let num of myIterable) {
  console.log(num); // 1, 2, 3, 4, 5
}