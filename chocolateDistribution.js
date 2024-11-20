function chocolateDistribution(arr, m) {
    
    if (m === 0 || arr.length === 0) return 0;

    
    arr.sort((a, b) => a - b);


    const n = arr.length;

    
    if (n < m) return -1;


    let minDiff = Number.MAX_VALUE;

    
    for (let i = 0; i + m - 1 < n; i++) {
        const diff = arr[i + m - 1] - arr[i];
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}


const packets = [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50];
const children = 7;
console.log("Minimum Difference:", chocolateDistribution(packets, children));
