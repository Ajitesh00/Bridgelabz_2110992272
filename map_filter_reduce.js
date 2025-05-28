let arr=[1,2,3,4];

//MAP
let doubled=arr.map(a => a*2);
console.log(doubled);

//FILTER
let filtered=arr.filter(a => a%2===0);
console.log(filtered);

//REDUCE
let sum = arr.reduce((a, b) => a + b, 0);
console.log("sum = ",sum);


//AS FUNCTIONS
function tripled(x){
    return x=x*3;
}

let result=arr.map(tripled);
console.log(result);

//Another way as functions
let newArr=arr.map(function quadruple(x){
    return x=x*4;
})
console.log(newArr);