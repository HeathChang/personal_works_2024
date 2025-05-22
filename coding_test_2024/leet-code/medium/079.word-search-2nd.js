// URL > https://leetcode.com/problems/word-search/description/?envType=problem-list-v2&envId=depth-first-search&


// SECOND ATTEMPT 0521
const solution = (board, word) => {
	const col = board.length;
	const row = board[0].length;

	const backTrack = (colIndex, rowIndex, index) => {
		if (index === word.length) return true;
		if (colIndex > col - 1 || 0 > colIndex || rowIndex > row - 1 || rowIndex < 0 || board[colIndex][rowIndex] !== word[index]) return false;

		const currentPosition = board[colIndex][rowIndex];
		board[colIndex][rowIndex] = -1;

		const condition =
			backTrack(colIndex + 1, rowIndex, index + 1) ||
			backTrack(colIndex - 1, rowIndex, index + 1) ||
			backTrack(colIndex, rowIndex + 1, index + 1) ||
			backTrack(colIndex, rowIndex - 1, index + 1);

		board[colIndex][rowIndex] = currentPosition;

		return condition;
	};

	for (let i = 0; i < col; i++) {
		for (let j = 0; j < row; j++) {
			if (board[i][j] === word[0]) return backTrack(i, j, 0);
		}
	}
};

console.log("result:: ", solution([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"));