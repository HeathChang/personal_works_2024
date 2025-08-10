// URL > https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/description/

const solution = (nums, k) => {
	const mapNums = new Map();
	for (let num of nums) {
		if (mapNums.has(num)) mapNums.set(num, mapNums.get(num) + 1);
		else mapNums.set(num, 1);
	}
	const toArr = [...mapNums].sort((a, b) => {
		if (a[0].length === b[0].length) return b[0].localeCompare(a[0]);
		return b[0] - a[0];
	});

	for (let item of toArr) {
		const [key, value] = item;
		k -= value;
		if (k <= 0) return key;
	}
};

console.log("result:: ", solution(["3", "6", "7", "10"], 4)); // 3
console.log("result:: ", solution(["2", "21", "12", "1"], 3)); // 2