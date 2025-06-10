// Callback Function - A function that is passed as an argument to another function and is executed after 
// the completion of some operations eg- setTimeout.

// Example with setTimeout
setTimeout(function xyz() {
    console.log("This runs after 3 seconds");
}, 3000);


function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
});
// y is callback function, it is called sometime later in code i.e. it depends on when x is called.


// If a piece of code takes a long time to execute, it will block the main thread and prevent other 
// code from running. Therefore we use asynchronous JS features like async/await, callback functions,
// promises, etc.

console.log("-");

//Above code written in a more clean way
function x(y){
    console.log("x");
    y();
}

function y(){
    console.log("y");
}

x(y); //y function passed as an argument