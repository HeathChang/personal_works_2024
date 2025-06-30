// URL > https://leetcode.com/problems/pascals-triangle-ii/description/?envType=problem-list-v2&envId=dynamic-programming

const solution = (rowIndex) => {
	const row = new Array(rowIndex + 1).fill(0);
	row[0] = 1;

	for (let i = 1; i <= rowIndex; i++) {
		for (let j = i; j > 0; j--) {
			row[j] = row[j] + row[j - 1];
		}
	}
	return row;
};

console.log("result:: ", solution(3)); // [1,3,3,1]
console.log("result:: ", solution(0)); // [1]