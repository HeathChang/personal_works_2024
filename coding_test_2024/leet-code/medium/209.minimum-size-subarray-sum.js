// URL > https://leetcode.com/problems/minimum-size-subarray-sum/

const solution = (target, nums) => {
	let left = 0;
	let sum = 0;
	let count = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		while (sum >= target) {
			count = Math.min(count, i - left + 1);
			sum -= nums[left];
			left++;
		}
	}


	return count === Number.MAX_SAFE_INTEGER ? 0 : count;
};

console.log("result:: ", solution(7, [2, 3, 1, 2, 4, 3])); // 2
// console.log("result:: ", solution(4, [1,4,4])); // 1
// console.log("result:: ", solution(11, [1,1,1,1,1,1,1,1])); // 0
