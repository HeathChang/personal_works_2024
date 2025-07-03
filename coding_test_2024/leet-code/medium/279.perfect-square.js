// URL > https://leetcode.com/problems/perfect-squares/description/?envType=problem-list-v2&envId=dynamic-programming

const solution = (n) => {
	const dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
	dp[0] = 0;

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j * j <= i; j++) {
			dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
		}
	}
	return dp[n];
};

console.log("result:: ", solution(12)); // 3
console.log("result:: ", solution(13)); // 2