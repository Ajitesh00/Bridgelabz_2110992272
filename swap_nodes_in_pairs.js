// Using Extra Space

var swapPairs = function(head){
    if(head===null) return null;
    if(head.next===null) return head;
    let temp=head;
    let arr=[];
    while(temp){
        arr.push(temp.val);
        temp=temp.next;
    }
    // console.log(arr);
    let i=0;
    let j=1;
    while(i<arr.length && j<arr.length){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i+=2;
        j+=2;
    }
    // console.log(arr);
    let list=new ListNode(0);
    let ans=list;
    let k=0;
    while(k<arr.length){
        list.next=new ListNode(arr[k]);
        list=list.next;
        k++;
    }
    return ans.next;
};