// URL > https://leetcode.com/problems/arithmetic-subarrays/description/

const solution = (nums, l, r) => {
	let returnArr = [];
	const isArithmeticSubArr = (newNums) => {
		if (newNums.length < 1) return false;
		if (newNums.length === 2) return true;
		const diff = newNums[1] - newNums[0];
		for (let i = 2; i < newNums.length; i++) {
			if (newNums[i] - newNums[i - 1] !== diff) return false;
		}
		return true;
	};

	for (let i = 0; i < l.length; i++) {
		let startIndex = l[i];
		let endIndex = r[i];
		let splitRangeArray = nums.slice(startIndex, endIndex + 1).sort((a, b) => a - b);
		const res = isArithmeticSubArr(splitRangeArray);
		returnArr.push(res);
	}

	return returnArr;
};

console.log("result:: ", solution([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5])); // [true,false,true]
console.log("result:: ", solution([-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10], [0, 1, 6, 4, 8, 7], [4, 4, 9, 7, 9, 10])); // [false,true,false,false,true,true]
