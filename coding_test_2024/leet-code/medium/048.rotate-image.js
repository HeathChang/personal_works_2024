// URL > https://leetcode.com/problems/rotate-image/?envType=study-plan-v2&envId=top-interview-150

const solution = (matrix) => {
	// first attempt: FAILED (DO NOT CHANGE 2D MATRIX)
	const newArray = Array.from({ length: matrix.length }, () =>
		Array(matrix[0].length).fill(-1)
	);

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			newArray[j][matrix.length - i - 1] = matrix[i][j];
		}
	}

	return newArray;

};

console.log("result:: ", solution([[1,2,3],[4,5,6],[7,8,9]]));
console.log("result:: ", solution([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));