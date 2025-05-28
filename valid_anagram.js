        let s1="geeks";
        let s2="kseeg";
        let mp1=new Map();
        let mp2=new Map();
        for(let i=0;i<s1.length;i++){
            // console.log(s1[i]);
            mp1.set(s1[i],(mp1.get(s1[i]) || 0) +1);
        }
        for(let i=0;i<s2.length;i++){
            mp2.set(s2[i], (mp2.get(s2[i]) || 0) +1);
        }

        for(let[key,val] of mp1){
            console.log(key,val);
        }
        console.log("\n");
        for(let[key,val] of mp2){
            console.log(key,val);
        }
        
        for (let [key, val] of mp1) {
            if (mp2.get(key) !== val) return false;
        }
        return true;