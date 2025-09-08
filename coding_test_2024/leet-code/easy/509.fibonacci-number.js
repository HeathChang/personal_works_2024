// URL > https://leetcode.com/problems/fibonacci-number/description

const solution = (n) => {
    // First Attempt::
    if (n <= 1) return n;
    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;

    // Second Attempt::
    if (n <= 1) return n;
    return solution(n - 1) + solution(n - 2);

    // Third Attempt::
    const memoArr = Array.from({length: n + 1}, () => null);
    memoArr[0] = 0;
    memoArr[1] = 1;

    const dp = (index) => {
        if (memoArr[index] !== null) return memoArr[index];

        memoArr[index] = dp(index - 2) + dp(index - 1);
        return memoArr[index];
    };

    return dp(n);
};

console.log("result:: ", solution(3)); // 2
console.log("result:: ", solution(4)); // 3
