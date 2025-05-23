// URL > https://leetcode.com/problems/word-search/description/?envType=problem-list-v2&envId=depth-first-search&

// ```
// 1. board의 모든 칸을 하나씩 탐색
// 2. 현재 글자가 word[0]이면 DFS 시작
// 3. DFS에서 상하좌우 이동하며 다음 글자 찾기
// 4. 같은 칸은 다시 못 씀 -> 방문 표시
// 5. 모든 글자를 순서대로 찾으면 true
// 6. 다 뒤졌는데 없으면 false
// ```;

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
	return false;
};

console.log("result:: ", solution([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"));
console.log("result:: ", solution([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"));