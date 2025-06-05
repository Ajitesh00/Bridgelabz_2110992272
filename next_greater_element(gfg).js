function nextLargerElement(arr) {
    // code here
    let st=[];
    let result=[];
    for(let i=arr.length-1;i>=0;i--){
        while(st.length>0 && arr[i]>=st[st.length-1]){
            st.pop();
        }
        if(st.length===0) result.push(-1);
        else{
            result.push(st[st.length-1]);
        }
        st.push(arr[i]);
    }
    return result.reverse();
}

console.log(nextLargerElement([3,10,4,2,1,2,6,1,7,2,9]));