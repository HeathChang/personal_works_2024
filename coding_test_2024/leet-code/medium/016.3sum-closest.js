// URL > https://leetcode.com/problems/3sum-closest/

const solution = (nums, target) => {
	nums.sort((a, b) => a - b );
	let returnValue = nums[0] + nums[1] + nums[2];
	for (let i = 0; i < nums.length; i++) {
		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			let sum = nums[i] + nums[left] + nums[right];

			if (Math.abs(returnValue - target) > Math.abs(sum - target)) {
				returnValue = sum;
			}
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return target;
            }
		}
	}

    return returnValue;
};

console.log("result:: ", solution([-1, 2, 1, -4], 1)); // 2
console.log("result:: ", solution([0, 0, 0], 1)); // 0
console.log("result:: ", solution([0,3,97,102,200], 300)); // 300