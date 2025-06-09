var subarraySum= function(nums, k) {
    let count=0;
    let prefix=new Map();
    let sum=0;
    prefix.set(0,1);
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(prefix.has(sum-k)){
            count+=prefix.get(sum-k);
        }
        if(prefix.has(sum)){
            prefix.set(sum,prefix.get(sum)+1);
        }else{
            prefix.set(sum,1);
        }
    }
    return count;
};

console.log(subarraySum([1,1,1], 2));