// Currying refers to the process of transforming a function with multiple arity into the same function with 
// less arity. The curried effect is achieved by binding some of the arguments to the first function invoke, 
// so that those values are fixed for the next invocation.

let multiply=function(x,y){
    console.log(x*y);
}

// CURRYING BY BIND
let multiplyByTwo=multiply.bind(this,2); // x will be initialised to 2, not y
multiplyByTwo(5) // y will be initialised to 5

let multiplyByThree=multiply.bind(this,2,3); // x=2, y=3
multiplyByThree(5); // Argument 5 is ignored


// CURRYING BY CLOSURE
let mutiply=function(x){
    return function(y){
        console.log(x*y);
    }
}

let mutiplyByTwo=mutiply(2); // x= 2
mutiplyByTwo(3); // y=3