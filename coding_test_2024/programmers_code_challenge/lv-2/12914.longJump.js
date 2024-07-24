// URL >

const solution = (n) => {
    const MOD = 1234567;

    // 기본적인 경우
    if (n === 1) return 1;
    if (n === 2) return 2;

    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
    }
    return dp[n];
};

console.log("result:: ", solution(4)); // 5
console.log("result:: ", solution(3)); // 3


