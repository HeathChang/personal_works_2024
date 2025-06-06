// URL > https://leetcode.com/problems/jump-game-ii/

const solution = (nums) => {
	let counter = 0;
	let selected = 0;
	let end = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		selected = Math.max(selected, i + nums[i]);

		if (i === end) {
			counter += 1;
			end = selected;
		}
	}
	return counter;
};

console.log("result:: ", solution([2, 3, 1, 1, 4])); // 2
console.log("result:: ", solution([2, 3, 0, 1, 4])); // 2