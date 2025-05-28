var reverseWords = function(s) {
    // Step 1: Trim leading/trailing spaces and split the string by spaces
    let arr = s.trim().split(/\s+/); // handles multiple spaces too

    // Step 2: Reverse the array
    arr.reverse();

    // Step 3: Join back to string
    return arr.join(" ");
};

let str="     Hello World     ";
console.log(reverseWords(str));