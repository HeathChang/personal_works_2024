const solution = (board, target) => {
	const col = board.length;
	const row = board[0].length;

	const dfs = (i, j, index) => {
		// target 넘어갔는지 체크

		// boundary check
		if (( i + 1 > col ) || ( i ) < 0 || ( j + 1 > row ) || ( j ) < 0) return false;

		const result =
			dfs(i + 1, j + 1, index + 1) ||
			dfs(i + 1, i - 1, index + 1) ||
			dfs(i - 1, i + 1, index + 1) ||
			dfs(i - 1, i - 1, index + 1) ;





		return true;
	};


	for (let i = 0; i < col; i++) {
		for (let j = 0; j < row; j++) {
			if (dfs(i, j, 0)) return true;
		}
	}
	return false;
};

console.log("result:: ", solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 12));
