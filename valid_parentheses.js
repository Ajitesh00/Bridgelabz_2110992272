function isValid(s) {
    const st = [];

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if(ch === '(' || ch === '[' || ch === '{'){
            st.push(ch);
        } 

        else if(st.length === 0){
            return false;
        }

        else if(
            (ch === ')' && st[st.length - 1] === '(') ||
            (ch === ']' && st[st.length - 1] === '[') ||
            (ch === '}' && st[st.length - 1] === '{')
        )
        {
            st.pop();
        }

        else{
            return false;
        }
    }
    if(st.length===0) return true;
    else return false;
}

console.log(isValid("({[)]}")); // false