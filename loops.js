let arr=[1,2,3,4];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log("\n");

for(let val of arr){
    console.log(val);
}

console.log("\n");

arr.forEach(val => console.log(val));