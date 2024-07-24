// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12914

const solution = (n) => {
	if (n <= 2) return n;
	const dp = new Array(n + 1).fill(0);
	dp[1] = 1;
	dp[2] = 2;

	for (let i = 3; i <= n; i++) {
		dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
	}
    return dp[n]

};

console.log("result:: ", solution(4)); // 5
console.log("result:: ", solution(3)); // 3


