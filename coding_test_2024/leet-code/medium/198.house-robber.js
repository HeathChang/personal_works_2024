// URL > https://leetcode.com/problems/house-robber/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (nums) => {
	let prev1 = 0;
	let prev2 = 0;

	for (let i = 0; i < nums.length; i++) {
		let temp = Math.max(prev1, prev2 + nums[i]);
		[prev1, prev2] = [temp, prev1];
	}
	return prev1;


};

console.log("result:: ", solution([1, 2, 3, 1])); // 4
console.log("result:: ", solution([2, 7, 9, 3, 1])); // 12
