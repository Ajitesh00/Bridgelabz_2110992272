var addTwoNumbers = function(l1, l2) {
    let dummy=new ListNode(-1);
    let temp=dummy;
    let sum=0;
    let carry=0;
    while(l1 || l2 || carry){
        let n1=l1?l1.val:0;
        let n2=l2?l2.val:0;
        sum=n1+n2+carry;
        carry=Math.floor(sum/10);
        temp.next=new ListNode(sum%10);
        temp=temp.next;
        if(l1) l1=l1.next;
        if(l2) l2=l2.next;
    }
    return dummy.next;
};

