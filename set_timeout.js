// Loop iteration with let i
function x(){
    for(let i=0;i<=5;i++){
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    }  
}
x();


// Loop iteration with var i
function x(){
    for(var i=0;i<=5;i++){
        function close(i){
            setTimeout(function() {
            console.log(i);
            }, i*1000);
        }
        close(i);
    }  
}
x();