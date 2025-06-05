var reverseList = function(head) {
    if(head==null) return null;
    let temp=head;
    let prev=null;
    let front=head.next;
    while(temp!==null){
        front=temp.next;
        temp.next=prev;
        prev=temp;
        temp=front;
    }
    return prev;
};

console.log(reverseList([1,2,3,4]));