// URL > https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (nums) => {
	let maxKey = null;
	let maxValue = -Infinity;

	const obj = nums.reduce((acc, cur) => {
		acc[cur] = ( acc[cur] || 0 ) + 1;
		return acc;
	}, {});

	for (let key in obj) {
		if (obj[key] > maxValue) {
			maxValue = obj[key];
			maxKey = key;
		}
	}

	return maxKey;
};

console.log("result:: ", solution([3, 2, 3])); // 3
console.log("result:: ", solution([2, 2, 1, 1, 1, 2, 2])); // 2
