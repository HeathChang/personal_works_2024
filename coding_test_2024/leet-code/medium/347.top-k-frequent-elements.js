// URL > https://leetcode.com/problems/top-k-frequent-elements/description/

const solution = (nums, k) => {
	const numMap = new Map();
	const returnArray = [];
	let counter = 0;
	for (let item of nums) {
		if (numMap.has(item)) numMap.set(item, numMap.get(item) + 1);
		else numMap.set(item, 1);
	}
	const sorted = [...numMap.entries()].sort((a, b) => b[1] - a[1]);
	sorted.forEach(item => {
		if (counter >= k) return returnArray;
		returnArray.push(item[0]);
		counter += 1;
	});
	return returnArray;
};

console.log("result:: ", solution([1, 1, 1, 2, 2, 3], 2)); // [2,1]
console.log("result:: ", solution([1, 2], 2)); // [2,1]
console.log("result:: ", solution([-1, -1], 1)); // [-1]
