// URL > https://leetcode.com/problems/minimum-path-sum/description/

const solution = (grid) => {
	const rowLength = grid[0].length;
	const colLength = grid.length;

	const dp = Array.from({ length: colLength }, () => Array(rowLength).fill(Number.MAX_SAFE_INTEGER));
	dp[0][0] = grid[0][0];
	for (let i = 1; i < colLength; i++) {
		dp[i][0] = dp[i - 1][0] + grid[i][0];
	}

	for (let i = 1; i < rowLength; i++) {
		dp[0][i] = dp[0][i - 1] + grid[0][i];
	}


	for (let i = 1; i < colLength; i++) {
		for (let j = 1; j < rowLength; j++) {
			dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
		}
	}
    return dp[colLength - 1][rowLength - 1]
};


console.log("result:: ", solution([[1, 3, 1], [1, 5, 1], [4, 2, 1]])); // 7
console.log("result:: ", solution([[1, 2, 3], [4, 5, 6]])); // 12