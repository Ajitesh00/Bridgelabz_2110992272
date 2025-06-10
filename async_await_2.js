let p1=new Promise(function(resolve){
    setTimeout(() => {
        resolve("Promise 1 Resolved");
    }, 15000);
});

let p2=new Promise((resolve) => {
    setTimeout(()=>{
        resolve("Promise 2 Resolved");
    }, 7500)
});

// async function handlePromise(){
//     let val1=await(p1);
//     console.log(val1);
//     let val2=await(p2);
//     console.log(val2);
// }
// handlePromise()



async function handlePromise1(){
    let val1=await(p1);
    console.log(val1);
}
handlePromise1();

async function handlePromise2(){
    let val2=await(p2);
    console.log(val2);
}
handlePromise2();