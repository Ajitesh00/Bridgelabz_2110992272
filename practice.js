//Lexical Scope
function func(){
    console.log(y);
}

var y=10;
func();


function multiply(nums){
    let product=1;
    nums.forEach(val => {
        product*=val;
    });
    return product;
}

console.log(multiply([1,2,3,4]));

function abc(name){
    console.log("Hello " + name);
}

abc("Ajitesh");

function xyz(name){
    console.log(`Hello ${name}`);
}

xyz("Ajitesh");

let arr1=[1,2,3];
let arr2=[2,4,6];
arr1.reduce((acc,val)=>{
    arr2.push(val);
},arr1)

console.log(arr2);

console.log(Number(undefined));
console.log(Number(null));
console.log(Number(''));


let x = [1, 2, 3];
x[10] = 99;
console.log(x.length);

console.log(x);

var user={name:"Ajitesh",
    squared: function(x){
        return x*x
    }
};
user.name="Madhu";
console.log(user,"\n",user.squared(2));

let a = { key: "a" };
let b = { key: "b" };
let map = new Map();

map.set(a, 123);
map.set(b, 456);

for(let [key,val] of map){
    console.log(key,val);
}
console.log(map.get(a));