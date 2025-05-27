// URL > https://leetcode.com/problems/edit-distance/description/

const solution = (word1, word2) => {
	const m = word1.length;
	const n = word2.length;

	const dp = Array.from({ length: m }, () => Array(n).fill(0));
	// word1의 앞 i글자를 word2의 앞 j글자로 바꾸는 데 필요한 최소 연산 횟수
	for (let i = 0; i < m; i++) dp[i][0] = i;
	for (let j = 0; j < n; j++) dp[0][j] = j;
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			if (word1[i - 1] === word2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1];
			} else {
				// 삭제 삽입 교체
				dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
			}
		}
	}
	console.log(123, dp);
	return dp[m - 1][n - 1];
};

console.log("result:: ", solution("horse", "ros")); // 3
// console.log("result:: ", solution("intention", "execution")); // 5
