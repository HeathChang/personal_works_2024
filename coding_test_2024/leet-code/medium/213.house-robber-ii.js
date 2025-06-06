// URL > https://leetcode.com/problems/house-robber-ii/

const solution = (nums) => {
	if (nums.length === 1) return nums[0];
	let prev1 = 0;
	let prev2 = 0;
	let prev3 = 0;
	let prev4 = 0;

	for (let i = 1; i < nums.length; i++) {
		const temp = Math.max(prev1, prev2 + nums[i]);
		[prev1, prev2] = [temp, prev1];
	}
	for (let i = 0; i < nums.length - 1; i++) {
		const temp = Math.max(prev3, prev4 + nums[i]);
		[prev3, prev4] = [temp, prev3];
	}
	return Math.max(prev1, prev3);
};

console.log("result:: ", solution([2, 3, 2])); // 3
console.log("result:: ", solution([1, 2, 3, 1])); //4