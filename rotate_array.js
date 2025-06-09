var rotate=function(nums,k){
    let n=nums.length;
    let arr=[];
    for(let i=0;i<n;i++){
        arr.push(nums[(i+k+1)%n]);
    }
    console.log(arr);
}

rotate([1,2,3,4,5,6,7],3);