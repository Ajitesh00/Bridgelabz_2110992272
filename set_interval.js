let intervalId=setInterval(function(){
    console.log("Hello World");
}, 1000);

setTimeout(function() {
    clearInterval(intervalId);
}, 5000); //Stops after 5 seconds