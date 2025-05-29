var findDuplicate = function(nums) {
    let mp=new Map();
    for(let i=0;i<nums.length;i++){
        if(!mp.get(nums[i])){
            mp.set(nums[i],1);
        }
        else{
            // mp.set(nums[i],mp.get(nums[i])+1);
            return nums[i];
        }
    }
};

console.log(findDuplicate([3,1,3,4,2]));