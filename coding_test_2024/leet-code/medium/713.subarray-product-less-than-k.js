// URL > https://leetcode.com/problems/subarray-product-less-than-k/

const solution = (nums, k) => {
	// FIRST ATTEMPT: SUCCESS (RT: 1451ms)
	// let returnValue = 0;
	// for (let i = 0; i < nums.length; i++) {
	// 	if (nums[i] < k) returnValue++;
	// 	let left = i + 1;
	// 	let currentValue = nums[i];
	// 	while (left <= nums.length - 1) {
	// 		currentValue *= nums[left];
	// 		if (currentValue >= k) break;
	// 		else {
	// 			returnValue += 1;
	// 			left++;
	// 		}
	// 	}
	// }
	// return returnValue;


	// SECOND ATTEMPT: SUCCESS
	if (k <= 1) return 0;
	let product = 1;
	let left = 0;
	let returnValue2 = 0;

	for (let right = 0; right < nums.length; right++) {
		product *= nums[right];
		while (product >= k) {
			product /= nums[left];
			left++;
		}
		returnValue2 += right - left + 1;
	}
	return returnValue2;
};

console.log("result:: ", solution([10, 5, 2, 6], 100)); // 8
// console.log("result:: ", solution([1, 2, 3], 0)); // 0
// console.log("result:: ", solution([10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3], 19)); // 18
