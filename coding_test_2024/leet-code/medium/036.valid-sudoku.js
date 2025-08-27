// URL > https://leetcode.com/problems/valid-sudoku/description/

const solution = (board) => {
	const rows = Array.from({ length: 9 }, () => new Set());
	const cols = Array.from({ length: 9 }, () => new Set());
	const boxes = Array.from({ length: 9 }, () => new Set());

	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			const val = board[r][c];
			if (val === '.') continue;

			if (rows[r].has(val)) return false;
			rows[r].add(val);

			if (cols[c].has(val)) return false;
			cols[c].add(val);

			const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
			if (boxes[boxIndex].has(val)) return false;
			boxes[boxIndex].add(val);
		}
	}

	return true;
};

console.log("result:: ", solution([["8", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])); // false
console.log("result:: ", solution([[".", ".", "4", ".", ".", ".", "6", "3", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], ["5", ".", ".", ".", ".", ".", ".", "9", "."], [".", ".", ".", "5", "6", ".", ".", ".", "."], ["4", ".", "3", ".", ".", ".", ".", ".", "1"], [".", ".", ".", "7", ".", ".", ".", ".", "."], [".", ".", ".", "5", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."]])); // false