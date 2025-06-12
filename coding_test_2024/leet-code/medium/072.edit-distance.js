// URL > https://leetcode.com/problems/edit-distance/description/

const solution = (word1, word2) => {
	const m = word1.length;
	const n = word2.length;

// (m+1) x (n+1) DP 배열
	const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

	// 초기화: 빈 문자열에서 변환
	for (let i = 0; i <= m; i++) dp[i][0] = i; // 삭제
	for (let j = 0; j <= n; j++) dp[0][j] = j; // 삽입

	// DP 채우기
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (word1[i - 1] === word2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1]; // 같은 문자면 그대로
			} else {
				dp[i][j] = Math.min(
					dp[i - 1][j],     // 삭제
					dp[i][j - 1],     // 삽입
					dp[i - 1][j - 1]  // 교체
				) + 1;
			}
		}
	}
	console.log(dp)
	return dp[m][n];
};

console.log("result:: ", solution("horse", "ros")); // 3
console.log("result:: ", solution("aba", "abc")); // 3
// console.log("result:: ", solution("intention", "execution")); // 5
