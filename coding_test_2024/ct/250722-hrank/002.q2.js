// question
// 작점 (a, b)에서 목표점 (c, d)로 이동 가능한지 판단하는 함수

const solution = (points) => {
	const [a, b, c, d] = points;
	const visited = new Set();


	const dfs = (x, y) => {
		if (x > c || y > d) return false;
		if (x === c && y === d) return true;

		const visitedPlace = `${x}${y}`
		if(visited.has(visitedPlace)) return false;
		visited.add(visitedPlace)


		return dfs(x + y, y) || dfs(x, y + x);
	};

	return dfs(1, a, b);
};

console.log("result:: ", solution([1, 1, 6, 4])); // false
console.log("result:: ", solution([1, 1, 5, 9])); // true
