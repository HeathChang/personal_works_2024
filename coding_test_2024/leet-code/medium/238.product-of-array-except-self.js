// URL > https://leetcode.com/problems/product-of-array-except-self/

const solution = (nums) => {
	const returnArray = new Array(nums.length);

	let leftValue = 1;
	for (let i = 0; i < nums.length; i++) {
		returnArray[i] = leftValue;
		leftValue *= nums[i];

	}
	let rightValue = 1;
	for (let i = nums.length - 1; i > -1; i--) {
		returnArray[i] *= rightValue;
		rightValue *= nums[i];
	}

	return returnArray;
};

console.log("result:: ", solution([1, 2, 3, 4])); // [24,12,8,6]
console.log("result:: ", solution([-1, 1, 0, -3, 3])); // [0,0,9,0,0]