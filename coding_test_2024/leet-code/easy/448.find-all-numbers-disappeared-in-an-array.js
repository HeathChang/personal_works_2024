// URL > https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

const solution = (nums) => {
	// First Attempt: Time Limit
	// const returnArr = [];
	// for (let i = 1; i <= nums.length; i++) {
	// 	if (!nums.includes(i)) returnArr.push(i);
	// }
	// return returnArr;

	// Second Attempt
	const numSet = new Set(nums);
	const result = [];

	for (let i = 1; i <= nums.length; i++) {
		if (!numSet.has(i)) {
			result.push(i);
		}
	}
	return result;
};

console.log("result:: ", solution([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
