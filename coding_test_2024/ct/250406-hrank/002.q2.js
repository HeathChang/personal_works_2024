const solution = (cost, k) => {
	const dp = Array.from({ length: cost.length + 1 }, () => Number.MAX_SAFE_INTEGER);
    dp[0] =  0;
	for (let i = 1; i <= cost.length; i++) {
		for (let j = 1; j <= k; j++) {
			if (i - j >= 0) {
                dp[i] = Math.min(dp[i], dp[i-j] + cost[i - 1])
			}
		}
	}
	return dp[cost.length];
};

console.log("result:: ", solution([1, 2, 3, 4], 2));// 6
