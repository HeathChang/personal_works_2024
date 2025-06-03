// URL > https://leetcode.com/problems/permutations-ii/description/

const solution = (nums) => {
	nums.sort();
	const returnArray = [];
	const usedArray = Array(nums.length).fill(false);

	const backTrack = (path) => {
		if (path.length === nums.length) {
			returnArray.push([...path]);
			return;
		}
		for (let i = 0; i < nums.length; i++) {
			if (usedArray[i] || (nums[i] === nums[i - 1] && !usedArray[i - 1])) continue;
			usedArray[i] = true;
			path.push(nums[i]);
			backTrack(path);
			path.pop();
			usedArray[i] = false;
		}
	};
	backTrack([]);

	return returnArray;

};

console.log("result:: ", solution([1, 1, 2]));
// console.log("result:: ", solution([1, 2, 3]));