// URL > https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (nums, k) => {
	let tempMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (tempMap.has(nums[i]) && Math.abs(tempMap.get(nums[i]) - i) <= k) return true;
        else tempMap.set(nums[i], i);
	}
    return false;
};

console.log("result:: ", solution([1, 2, 3, 1], 3)); // true
console.log("result:: ", solution([1, 0, 1, 1], 1)); // true
console.log("result:: ", solution([1, 2, 3, 1, 2, 3], 2)); //false
