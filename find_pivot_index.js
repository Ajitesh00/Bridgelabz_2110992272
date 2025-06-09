var pivotIndex = function(nums) {
    let prefix=[];
    let prefixsum=0;
    for(let i=0;i<nums.length;i++){
        prefixsum+=nums[i];
        prefix.push(prefixsum);
    }
    let suffix=[];
    let suffixsum=0;
    for(let i=nums.length-1;i>=0;i--){
        suffixsum+=nums[i];
        suffix.unshift(suffixsum);
    }
    for(let i=0;i<prefix.length;i++){
        if(prefix[i]===suffix[i]) return i;
    }
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));