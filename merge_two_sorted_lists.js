var mergeTwoLists = function(list1, list2) {
    let i=list1;
    let j=list2;
    let result=new ListNode(null);
    let temp=result;
    while(i!==null && j!==null){
        if(i.val<=j.val){
            temp.next=i;
            temp=temp.next;
            i=i.next;
        }
        else if(j.val<i.val){
            temp.next=j;
            temp=temp.next;
            j=j.next;
        }
    }
    if(i!==null){
        while(i){
            temp.next=i;
            temp=temp.next;
            i=i.next;
        }
    }
    if(j!==null){
        while(j){
            temp.next=j;
            temp=temp.next;
            j=j.next;
        }
    }
    return result.next;
};

console.log(mergeTwoLists([1,2,4],[1,3,4]));