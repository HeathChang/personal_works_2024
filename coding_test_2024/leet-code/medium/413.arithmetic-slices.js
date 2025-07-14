// URL > https://leetcode.com/problems/arithmetic-slices/description/?envType=problem-list-v2&envId=dynamic-programming

const solution = (nums) => {
	if (nums.length < 3) return 0;
	const dp = Array.from({ length: nums.length }).fill(0);
	let total = 0;

	for (let i = 2; i < nums.length; i++) {
		if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
			dp[i] = dp[i - 1] + 1;
			total += dp[i];
		}
	}
	return total;
};

console.log("result:: ", solution([1, 2, 3, 4])); // 3
console.log("result:: ", solution([1, 3, 5, 7, 10])); // 3
// console.log("result:: ", solution([1])); // 0