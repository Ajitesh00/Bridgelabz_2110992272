let nums=[1,2,3,1];
let st=new Set();
for(let val of nums){
    st.add(val);
}
if(nums.length===st.size) console.log(false);
else console.log(true);