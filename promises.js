// A promise is an object representing the eventual completion or failure of an asynchronous operation.

let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed!");
  } else {
    reject("Task failed!");
  }
});

promise
  .then(result => console.log(result))    // Task completed!
  .catch(error => console.error(error));  // If error

//without arrow function
promise
  .then(function(result){
    console.log(result);
  })
  .catch(function(error){
    console.log(error);
  });
