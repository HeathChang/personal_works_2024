// URL > https://leetcode.com/problems/number-of-islands/description/

const solution = (grid) => {
	const rowLength = grid.length;
	const colLength = grid[0].length;
	const tempGrid = [...grid];

	let returnCount = 0;

	const backTrack = (rowIndex, colIndex) => {
		if (colIndex < 0 || rowIndex < 0 || tempGrid[rowIndex]?.[colIndex] !== '1' || rowIndex > rowLength - 1 || colIndex > colLength - 1) return;
		tempGrid[rowIndex][colIndex] = "-1";
		backTrack(rowIndex + 1, colIndex) || backTrack(rowIndex - 1, colIndex) || backTrack(rowIndex, colIndex + 1) || backTrack(rowIndex, colIndex - 1);
	};

	for (let i = 0; i < rowLength; i++) {
		for (let j = 0; j < colLength; j++) {
			if (tempGrid[i][j] === '1') {
				returnCount += 1;
				backTrack(i, j);
			}
		}
	}

	return returnCount;
};

console.log("result:: ", solution([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]])); // 1
console.log("result:: ", solution([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]])); // 3
console.log("result:: ", solution([["1", "0", "1", "1", "0", "1", "1"]])); // 3
