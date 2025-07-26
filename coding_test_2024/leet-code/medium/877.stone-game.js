// URL > https://leetcode.com/problems/stone-game/description/?envType=problem-list-v2&envId=dynamic-programming

const solution = (piles) => {

	const visitedMap = new Map();
	// ATTEMPT 1 :: using dfs
	const dfs = (left, right) => {
		if (left > right) return 0;
		const key = `${ left }${ right }`;
		if (visitedMap.has(key)) return visitedMap.get(key);


		const res = Math.max(piles[left] - dfs(left + 1, right), piles[right] - dfs(left, right - 1));
		visitedMap.set(key, res);
		return res;
	};


	return dfs(0, piles.length - 1) > 0;

	// SOLVE-GLITCH :: Alice Always Win
	// return true;
};

// console.log("result:: ", solution([5, 3, 4, 5])); // true
console.log("result:: ", solution([3, 7, 2, 3])); // true
