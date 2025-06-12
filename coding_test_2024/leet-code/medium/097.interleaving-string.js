// URL > https://leetcode.com/problems/interleaving-string/description/?envType=problem-list-v2&envId=dynamic-programming

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

const solution = (s1, s2, s3) => {
	const s1Length = s1.length;
	const s2Length = s2.length;
	const s3Length = s3.length;
	if (s1Length + s2Length !== s3Length) return false;

	const dp = new Array(s1Length + 1).fill(null).map(() => new Array(s2Length + 1).fill(false));
	dp[0][0] = true;

	for (let i = 0; i < s1Length + 1; i++) {
		for (let j = 0; j < s2Length + 1; j++) {
			// TODO:: 조건 S1
			if (i > 0 && s1[i - 1] === s3[i + j - 1]) {
				dp[i][j] = dp[i][j] || dp[i - 1][j];
			}

			// TODO:: 조건 S2
			if (j > 0 && s2[j - 1] === s3[i + j - 1]) {
				dp[i][j] = dp[i][j] || dp[i][j - 1];
			}
		}
	}
	return dp[s1Length][s2Length];
};


console.log("result:: ", solution("aab", "axy", "aaxaby")); // true
// console.log("result:: ", solution("aabcc", "dbbca", "aadbbcbcac")); // true
// console.log("result:: ", solution("aabcc", "dbbca", "aadbbbaccc")); // false