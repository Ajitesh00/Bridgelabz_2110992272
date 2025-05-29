var topKFrequent = function(nums, k) {
    let mp=new Map();
    for(let i=0;i<nums.length;i++){
        if(!mp.get(nums[i])){
            mp.set(nums[i],1);
        }
        else{
            mp.set(nums[i],mp.get(nums[i])+1);
        }
    }

    let vec = Array.from(mp.entries());
    // console.log(vec);
    // Sort in descending order based on the second element (value)
    vec.sort((a, b) => b[1] - a[1]); // Descending order
    // console.log(vec);
    
    let count=0;
    let arr=[];
    for(let i=0;i<vec.length;i++){
        if(count===k) break;
        arr.push(vec[i][0]);
        count++;
    }

    return arr;
};

console.log(topKFrequent([3,1,1,1,2,2]));