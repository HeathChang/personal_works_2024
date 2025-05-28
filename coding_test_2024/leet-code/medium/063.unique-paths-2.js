// URL > https://leetcode.com/problems/unique-paths-ii/

const solution = (obstacleGrid) => {
	const colLength = obstacleGrid.length;
	const rowLength = obstacleGrid[0].length;
	if (obstacleGrid[0][0] === 1 || obstacleGrid[colLength - 1][rowLength - 1] === 1) return 0;
	const dp = obstacleGrid.map(row => row.map(item => item === 1 ? "#" : 1));
	dp[0][0] = 1;

	for (let j = 1; j < rowLength; j++) {
		dp[0][j] = dp[0][j] === "#" || dp[0][j - 1] === "#" ? "#" : 1;
	}
	for (let i = 1; i < colLength; i++) {
		dp[i][0] = dp[i][0] === "#" || dp[i - 1][0] === "#" ? "#" : 1;
	}

	for (let i = 1; i < colLength; i++) {
		for (let j = 1; j < rowLength; j++) {
			if (dp[i][j] === "#") continue;

			const a = Number.isInteger(dp[i - 1][j]) ? dp[i - 1][j] : 0;
			const b = Number.isInteger(dp[i][j - 1]) ? dp[i][j - 1] : 0;
			dp[i][j] = a + b;
		}
	}
	return dp[colLength - 1][rowLength - 1] === "#" ? 0 : dp[colLength - 1][rowLength - 1];
};

console.log("result:: ", solution([[0, 0, 0], [0, 1, 0], [0, 0, 0]])); // 2
console.log("result:: ", solution([[0, 1], [0, 0]])); // 1
console.log("result:: ", solution([[0, 0], [0, 1]])); // 1
console.log("result:: ", solution([[0, 0], [0, 0]])); // 1
console.log("result:: ", solution([[0, 0]])); // 1
console.log("result:: ", solution([[0, 1, 0, 0]])); // 0
console.log("result:: ", solution([[0], [0]])); // 1
