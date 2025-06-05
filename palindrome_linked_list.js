var isPalindrome = function(head) {
    if(head.next===null) return true;
    if(head.next.next===null && head.val===head.next.val) return true;
    else if(head.next.next===null && head.val!==head.next.val) return false;
    let arr=[];
    let temp=head;
    while(temp){
        arr.push(temp.val);
        temp=temp.next;
    }

    let i=0;
    let j=arr.length-1;
    while(i<j){
        if(arr[i]!==arr[j]) return false;
        i++;
        j--;
    }
    return true;
};