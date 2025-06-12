// URL > https://leetcode.com/problems/edit-distance/description/

const solution = (word1, word2) => {
	// FIRST ATTEMPT:: SUCCESS, TMR (too much resource)
	// const m = word1.length;
	// const n = word2.length;
	// // word1의 앞 i글자를 word2의 앞 j글자로 바꾸는 데 필요한 최소 연산 횟수
	// const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));
	// for (let i = 0; i <= m; i++) dp[i][0] = i;
	// for (let j = 0; j <= n; j++) dp[0][j] = j;
	//
	// for (let i = 1; i <= m; i++) {
	// 	for (let j = 1; j <= n; j++) {
	// 		if (word1[i - 1] === word2[j - 1]) {
	// 			dp[i][j] = dp[i - 1][j - 1];
	// 		} else {
	// 			dp[i][j] = Math.min(
	// 				dp[i - 1][j],
	// 				dp[i][j - 1],
	// 				dp[i - 1][j - 1]
	// 			) + 1;
	//
	// 		}
	// 	}
	// }


	// SECOND ATTEMPT:: SUCCESS (better)
	const m = word1.length;
	const n = word2.length;

	if (m < n) return solution(word2, word1);

	let prev = Array(n + 1).fill(0);
	let curr = Array(n + 1).fill(0);

	for (let j = 0; j <= n; j++) prev[j] = j;
	for (let i = 1; i <= m; i++) {
		curr[0] = i;
		for (let j = 1; j <= n; j++) {
			if (word1[i - 1] === word2[j - 1]) {
				curr[j] = prev[j - 1];
			} else {
				curr[j] = Math.min(
					prev[j],    // delete
					curr[j - 1],// insert
					prev[j - 1] // replace
				) + 1;
			}
		}
		[prev, curr] = [curr, prev]; // swap
	}
	return prev[n];
};

console.log("result:: ", solution("horse", "ros")); // 3
// console.log("result:: ", solution("intention", "execution")); // 5
