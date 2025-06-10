let p=new Promise(function(resolve){
    setTimeout(function print(){
        resolve("Promise Resolved");
    }, 5000);
});

function getData(){
    p.then(function(val){
        console.log(val); // "Promise Resolved"
    })
    console.log("Hello World");
}
getData();
// It doesn't block the function execution; it schedules the callback to run once the promise resolves.


// async function handlePromise(){
//     let val=await p;
//     console.log("Hello World");
//     console.log(val); // "Promise Resolved"
// }
// handlePromise();
// await pauses execution inside the async function until the promise resolves.

console.log("This will be printed first in case async/await"); // Because await suspends the function 
// handlePromise() and because of that it goes out of the call stack until the promise is resolved.