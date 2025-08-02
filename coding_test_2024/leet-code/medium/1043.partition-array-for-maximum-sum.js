// URL > https://leetcode.com/problems/partition-array-for-maximum-sum/description/

const solution = (arr, k) => {

	const n = arr.length;
	const dp = new Array(n + 1).fill(0); // dp[i] = max sum for arr[0..i-1]

	for (let i = 1; i <= n; i++) {
		let maxInPartition = 0;

		// Check last j elements up to k length
		for (let j = 1; j <= k && i - j >= 0; j++) {
			maxInPartition = Math.max(maxInPartition, arr[i - j]);
			dp[i] = Math.max(dp[i], dp[i - j] + maxInPartition * j);
		}
	}

	return dp[n];

};

console.log("result:: ", solution([1, 15, 7, 9, 2, 5, 10], 3)); // 84 ([15,15,15,9,10,10,10])
// console.log("result:: ", solution([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4)); // 83 ([5,5,5,5,7,7,7,7,9,9,9,9]) 20 + 28 + 36 => 83
