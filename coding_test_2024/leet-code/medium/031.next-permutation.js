// URL > https://leetcode.com/problems/next-permutation/description/

const solution = (nums) => {
	let i = nums.length - 2;

	// Step 1: Find the first decreasing element from the end
	while (i >= 0 && nums[i] >= nums[i + 1]) {
		i--;
	}

	if (i >= 0) {
		// Step 2: Find the element just larger than nums[i] to swap
		let j = nums.length - 1;
		while (nums[j] <= nums[i]) {
			j--;
		}
		[nums[i], nums[j]] = [nums[j], nums[i]]; // Swap
	}

	// Step 3: Reverse the elements after index i
	let left = i + 1;
	let right = nums.length - 1;
	while (left < right) {
		[nums[left], nums[right]] = [nums[right], nums[left]];
		left++;
		right--;
	}
	return nums;
};

console.log("result:: ", solution([1, 2, 3])); // [1,3,2]
console.log("result:: ", solution([3, 2, 1])); // [1,2,3]