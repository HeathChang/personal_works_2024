// URL > https://leetcode.com/problems/count-numbers-with-unique-digits/description/?envType=problem-list-v2&envId=dynamic-programming

const solution = (n) => {
	// ATTEMPT 1. TIME LIMIT EXCEED
	// let count = 0;
	//
	// for (let i = 0; i < 10 ** n; i++) {
	// 	let tempSet = new Set();
	// 	i.toString().split('').forEach(item => tempSet.add(item));
	// 	if (i === +[...tempSet].join('')) count += 1;
	// }
	// return count;

	// ATTEMPT 2. SUCCESS
	const dp = Array.from({ length: n }).fill(0);
	dp[0] = 1;
	dp[1] = 10;
	if (n < 2) return dp[n];
	let a = 9;
	let b = 9;
	for (let i = 2; i <= n; i++) {
		a *= b;
		dp[i] = dp[i - 1] + a;
		b--;

	}

	return dp[n];
};

console.log("result:: ", solution(3)); // 91
// console.log("result:: ", solution(2)); // 91
// console.log("result:: ", solution(1)); // 10
// console.log("result:: ", solution(0)); // 1