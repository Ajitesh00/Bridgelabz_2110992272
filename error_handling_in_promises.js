let p=new Promise(function(resolve, reject){
    setTimeout(function print(){
        let success = true; // Change to false to test rejection
        if(success) {
            resolve("Promise Resolved");
        } else {
            reject("Promise Rejected");
        }
    }, 5000);
});

p.then(function(val){
    console.log(val); // "Promise Resolved"
})
.catch(function(error){
    console.error(error); // "Promise Rejected"
});