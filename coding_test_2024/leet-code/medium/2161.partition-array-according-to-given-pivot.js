// URL > https://leetcode.com/problems/partition-array-according-to-given-pivot/description/

const solution = (nums, pivot) => {
	const bigger = [];
	const smaller = [];
	const same = [];

	for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) smaller.push(nums[i]);
        else if (nums[i] > pivot) bigger.push(nums[i]);
        else same.push(nums[i]);
	}


	return [...smaller, ...same, ...bigger];
};

console.log("result:: ", solution([9, 12, 5, 10, 14, 3, 10], 10)); // [9,5,3,10,10,12,14]
console.log("result:: ", solution([-3, 4, 3, 2], 2)); // [-3,2,4,3]
console.log("result:: ", solution([9,12,5,10,14,3,10], 10)); // [9,5,3,10,10,12,14]