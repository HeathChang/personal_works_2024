// URL > https://leetcode.com/problems/count-sorted-vowel-strings/description

const solution = (n) => {
	// First Attempt ::  Success
	// if (n === 1) return 5;
	//
	// const factorial = (n, k) => {
	// 	let res = 1;
	// 	for (let i = 1; i <= k; i++) {
	//       res = res * (n - i + 1) / i;
	// 	}
	//   return res;
	// };
	//
	// return factorial(n + 4, 4);

  // Second Attempt ::  Success
	const dp = Array.from({ length: n + 1 }, () => 1);
	for (let i = 1; i <= n; i++){
		dp[i] = ( 5 +  i - 1  ) / i  * dp[i - 1];
	}
	return dp[n];
};

// console.log("result:: ", solution(1)); // 5
// console.log("result:: ", solution(2)); // 15
// console.log("result:: ", solution(3)); // 35
// console.log("result:: ", solution(4)); // 70
console.log("result:: ", solution(6)); // 210