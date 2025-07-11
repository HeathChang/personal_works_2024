// URL > https://leetcode.com/problems/surrounded-regions/description/

const solution = (board) => {
	const rowLength = board.length;
	const colLength = board[0].length;


	const visited = Array.from({ length: rowLength }, () => Array.from({ length: colLength }).fill(false));
	const isEdge = (r, c) => r === 0 || c === 0 || r === rowLength - 1 || c === colLength - 1;

	const backTrack = (rowIndex, colIndex, path) => {
		if (( colIndex > colLength || rowIndex > rowLength|| rowIndex < 0 || colIndex < 0 )) return false; // out-of-boundary
		if (board[rowIndex][colIndex] !== "O" || visited[rowIndex][colIndex]) return false; // x | visited

		visited[rowIndex][colIndex] = true;
		path.push([rowIndex, colIndex]);
		let res = isEdge(rowIndex, colIndex)
		return  res || backTrack(rowIndex + 1, colIndex, path) ||
			backTrack(rowIndex - 1, colIndex, path) ||
			backTrack(rowIndex, colIndex + 1, path) ||
			backTrack(rowIndex, colIndex - 1, path);
	};

	for (let i = 0; i < rowLength - 1; i++) {
		for (let j = 0; j < colLength; j++) {
			if (board[i][j] === 'O' && !visited[i][j]) {
				const path = [];
				const res = backTrack(i, j, path);
				if (!res) {
					for (const [a, b] of path) {
						board[a][b] = 'X';
					}
				}
			}
		}
	}
	return board;


};

console.log("result:: ", solution([["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]])); // [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// console.log("result:: ", solution([["O", "O", "O"], ["O", "O", "O"], ["O", "O", "O"]])); // [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// console.log("result:: ", solution([["X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X"], ["X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X"]])); // [["X"]]
// console.log("result:: ", solution([["X"]])); // [["X"]]
// console.log("result:: ", solution([["O", "X", "X", "O", "X"], ["X", "O", "O", "X", "O"], ["X", "O", "X", "O", "X"], ["O", "X", "O", "O", "O"], ["X", "X", "O", "X", "O"]])); // [["O","X","X","O","X"],["X","X","X","X","O"],["X","X","X","O","X"],["O","X","O","O","O"],["X","X","O","X","O"]]