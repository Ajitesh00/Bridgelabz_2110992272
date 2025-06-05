// Nested for loops (Naive Approach)

var getIntersectionNode = function(headA, headB) {
    while(headA){
        let temp=headB;
        while(temp){
            if(temp===headA) return temp;
            temp=temp.next;
        }
        headA=headA.next;
    }
    return null;
};


// Optimised Approach

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let a = headA;
    let b = headB;

    while (a !== b) {
        if (a === null) {
            a = headB;
        } else {
            a = a.next;
        }

        if (b === null) {
            b = headA;
        } else {
            b = b.next;
        }
    }

    return a; // Intersection node or null
}
