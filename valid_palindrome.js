let str='A man, a plan, a canal: Panama';
str=str.toLowerCase();
let i=0;
let j=(str.length)-1;
let flag=1;
while(i<j){
    while(i<j && (str[i]<'a' || str[i]>'z')){
        i++;
    }
    while(i<j && (str[j]<'a' || str[j]>'z')){
        j--;
    }
    if(str[i]!==str[j]){
        flag=0;
        console.log("false");
        break;
    } 
    i++;
    j--;
}
if(flag===1) console.log("true");