a();
// b(); TYPE ERROR b is not a function, it is treated as a variable
// Difference b/w the both is of hoisting


//FUNCTION STATEMENT aka FUNCTION DECLARATION
function a(){
    console.log("a called");
}
a();

//FUNCTION EXPRESSION
var b=function b(){
    console.log("b called");
}
b();


//ANONYMOUS FUNCTION - A function without a name, it does not have its own identity. 
// Anonymous functions are used where functions are used as values (eg to assign it to any variable or use in objects)
var c=function(){
    console.log("c called");
}
c();

//NAMED FUNCTION EXPRESSIONS - Instead of using anonymous function when we give it a name
var d=function xyz(){
    console.log("d called");
}
d();

//ARGUMENTS vs PARAMETERS
// The values that are declared within a function when the function is called are known as an argument. 
// Whereas, the variables that are defined when the function is declared are known as a parameter.


//FIRST CLASS FUCTIONS - A function (anonymous or named) can be assigned as a value to a variable, can be 
// passed as an argument to other functions and can be returned by another function.
var e=function temp(){
    return function (){

    }
}

console.log(e());

//IMMEDIATELY INVOKED FUNCTIONS
(function () {
  console.log("IIFE executed");
})();