function maximumSumSubarray(arr, k) {
    let i = 0;
    let j = 0;
    let sum = 0;
    let maxi = Number.MIN_SAFE_INTEGER;

    while (j < arr.length) {
        sum += arr[j];

        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            maxi = Math.max(maxi, sum);
            sum -= arr[i];
            i++;
            j++;
        }
    }

    return maxi;
}

console.log(maximumSumSubarray([100, 200, 300, 400],2)); // 300 + 400 = 700