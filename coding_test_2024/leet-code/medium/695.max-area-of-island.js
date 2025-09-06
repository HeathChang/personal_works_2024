// URL > https://leetcode.com/problems/max-area-of-island/

const solution = (grid) => {
	const rowLen = grid.length;
	const colLen = grid[0].length;
	const visitedGrid = Array.from({ length: rowLen }, () => Array.from({ length: colLen }).fill(false));

	const backTrack = (rowIndex, colIndex) => {
		if (rowIndex < 0 || colIndex < 0 || rowIndex >= rowLen || colIndex >= colLen || grid[rowIndex][colIndex] !== 1 || visitedGrid[rowIndex][colIndex]) return 0;
		visitedGrid[rowIndex][colIndex] = true;

		return 1 + backTrack(rowIndex + 1, colIndex) + backTrack(rowIndex - 1, colIndex) + backTrack(rowIndex, colIndex + 1) + backTrack(rowIndex, colIndex - 1);
	};

	let maxArea = 0;
	for (let i = 0; i < rowLen; i++) {
		for (let j = 0; j < colLen; j++) {
			if (grid[i][j] === 1 && !visitedGrid[i][j]) {
				maxArea = Math.max(maxArea, backTrack(i, j));
			}
		}
	}

	return maxArea;
};

console.log("result:: ", solution([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]])); // 6
