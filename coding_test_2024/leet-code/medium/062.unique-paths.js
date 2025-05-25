// URL > https://leetcode.com/problems/unique-paths/

const solution = (m, n) => {
	const dp = Array.from({ length: m }, () => Array(n).fill(1));

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
		}
	}

	return dp[m - 1][n - 1];
};

console.log("result:: ", solution(3, 2)); // 3
console.log("result:: ", solution(3, 7)); // 28
