// Map is used to store key value pairs
let mp=new Map();

mp.set(1,"Ajitesh");
mp.set(2,"Om");
mp.set(3,"Dipin");

console.log(mp.get(2)+"\n");
for(let [key,val] of mp){
    console.log(key,val);
}

// Used for objects
// Can't be looped
let wm=new WeakMap();
let obj={
    name:"Ajitesh",
    id:1,
    age:21,
    gender:"male"
};

wm.set(obj,"data");

console.log("\n",obj,"->",wm.get(obj));