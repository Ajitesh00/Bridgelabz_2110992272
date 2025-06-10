// Async function - It always returns a Promise, even if you return a value (value will be wrapped as a promise).
// Await keyword (not a function) - await pauses the execution inside an async function until the Promise is resolved.

async function getData(){
    return "Hello World";
}

let data=getData();

console.log(data);

data.then(function(val){
    console.log(val);
});


// Await example
async function greet() {
  let result = await Promise.resolve("Hi there!");
  console.log(result);
}
greet(); // prints "Hi there!"


//Full example
function getNumber() {
  return new Promise(resolve => {
    setTimeout(() => resolve(42), 1000);
  });
}

async function showNumber() {
  console.log("Fetching number...");
  let num = await getNumber();
  console.log("The number is:", num);
}

showNumber();
