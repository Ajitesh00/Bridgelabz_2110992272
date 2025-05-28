let arr=[2,7,9,11];
let target=9;
let mp=new Map();
let flag=1;
for(let i=0;i<arr.length;i++){
    let num=target-arr[i];
    if(mp.has(num)){
        flag=0;
        console.log(num,mp.get(num));
        break;
    }
    else mp.set(arr[i],num);
}
if(flag===1) console.log(-1);