// URL > https://leetcode.com/problems/count-submatrices-with-all-ones/description/

const solution = (mat) => {
	const m = mat.length, n = mat[0].length;
	let heights = new Array(n).fill(0);
	let result = 0;

	for (let i = 0; i < m; i++) {
		// Build histogram heights
		for (let j = 0; j < n; j++) {
			heights[j] = mat[i][j] === 0 ? 0 : heights[j] + 1;
		}

		// Count submatrices ending at row i
		let stack = [];
		let sum = new Array(n).fill(0);

		for (let j = 0; j < n; j++) {
			while (stack.length && heights[stack[stack.length - 1]] >= heights[j]) {
				stack.pop();
			}

			if (stack.length) {
				let prev = stack[stack.length - 1];
				sum[j] = sum[prev] + heights[j] * (j - prev);
			} else {
				sum[j] = heights[j] * (j + 1);
			}

			result += sum[j];
			stack.push(j);
		}
	}

	return result;


};

console.log("result:: ", solution([[1, 0, 1], [1, 1, 0], [1, 1, 0]])); // 13
// console.log("result:: ", solution([[0,1,1,0],[0,1,1,1],[1,1,1,0]])); // 24