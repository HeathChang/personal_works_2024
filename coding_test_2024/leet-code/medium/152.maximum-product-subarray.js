// URL > https://leetcode.com/problems/maximum-product-subarray/

const solution = (nums) => {
	if (nums.length === 1) return nums[0];
	let max = nums[0];
	let min = nums[0];
	let returnResult = nums[0];

	for (let i = 1; i < nums.length; i++) {
		const num = nums[i];
		if (num < 0) [max, min] = [min, max];

		max = Math.max(num * max, num);
		min = Math.min(num * min, num);
		returnResult = Math.max(returnResult, max);
	}

	return returnResult;
};


console.log("result:: ", solution([2, 3, -2, 4])); // 6
console.log("result:: ", solution([3, -1, 4])); // 6
console.log("result:: ", solution([-2, 0, -1])); // 0
console.log("result:: ", solution([0, 2])); // 0