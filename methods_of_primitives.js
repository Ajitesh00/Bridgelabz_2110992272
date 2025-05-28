let num = 123.456;
console.log(num.toFixed(2)); // "123.46"
console.log(Number.isInteger(num)); // false
console.log(String(num)); // "123.456"
console.log(parseInt(num)); // 123


let str = "Hello World";
console.log(str.toLowerCase()); // "hello world"
console.log(str.includes("World")); // true
console.log(str.substring(0,5)); // "Hello"
let arr=str.split(" ")
console.log(arr);  // [ 'Hello', 'World' ]