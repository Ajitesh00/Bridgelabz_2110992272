function divide(a:number,b:number): number {
    if(b===0){
        throw new Error("Division by zero is not allowed");
    }
    return a/b;
}

try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // This will throw an error
}
catch(error){
    if (error instanceof Error) {
        console.error("An error occurred:", error.message);
    } else {
        console.error("An unexpected error occurred");
    }
}