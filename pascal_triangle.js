function generate(numRows) {
    const ans = new Array(numRows);
    
    for (let i = 0; i < numRows; i++) {
        ans[i] = new Array(i + 1).fill(1); // Fill row with 1s
        for (let j = 1; j < i; j++) {
            ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
        }
    }
    return ans;
}

let arr=generate(5);
console.log(arr);
