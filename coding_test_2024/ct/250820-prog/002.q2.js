// URL >

const solution = (matrix, r) => {
	let count = 0;
	r %= 4;
	const len = matrix.length;
	let newMatrix = [...matrix];

	while (count < r) {
		let rotate = Array.from({ length: len }, () => Array(len).fill(0));
		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len; j++) {
				rotate[j][len - 1 - i] = newMatrix[i][j];
			}
		}
		newMatrix = rotate;
		count++;
	}
	return newMatrix;
};

console.log("result:: ", solution([[1, 2], [3, 4]], 5)); // [[3,1],[4,2]
console.log("result:: ", solution([[4, 1, 2], [7, 3, 4], [3, 5, 6]], 3)); //  [ [ 2, 4, 6 ], [ 1, 3, 5 ], [ 4, 7, 3 ] ]

