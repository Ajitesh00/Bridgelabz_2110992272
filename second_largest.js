let arr=[12,35,1,10,34,1];
let largest=-1;
let largest2=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest2=largest;
        largest=arr[i];
    } 
    if(arr[i]>largest2 && arr[i]<largest) largest2=arr[i];
}
console.log(largest2);