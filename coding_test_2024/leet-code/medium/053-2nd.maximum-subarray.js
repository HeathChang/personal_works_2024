// URL > https://leetcode.com/problems/maximum-subarray/description/

const solution = (nums) => {
	if (nums.length === 1) return nums[0];
	let maxSum = nums[0];
	let currentSum = nums[0];

	for (let i = 1; i < nums.length; i++) {
		currentSum = Math.max( nums[i] , currentSum + nums[i]);
		maxSum = Math.max(maxSum , currentSum)
	}
	return maxSum;
};

console.log("result:: ", solution([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 [4,-1,2,1]
console.log("result:: ", solution([1])); // 1 [1]