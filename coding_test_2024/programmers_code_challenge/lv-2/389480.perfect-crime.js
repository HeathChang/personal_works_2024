// URL > https://school.programmers.co.kr/learn/courses/30/lessons/389480

const solution = (info, n, m) => {
	// First Attempt: FAILED
	// if (info.reduce((acc, cur) => acc = acc + cur[1], 0) < m) return 0;
	// let maxA = Infinity;
	// for (let i = 0; i < info.length; i++) {
	// 	const spliceExceptArr = [...info].filter((_, idx) => idx !== i);
	// 	let leftSum = spliceExceptArr.reduce((acc, cur) => acc = acc + cur[1], 0);
	// 	let tempA = info[i][0];
	// 	while (leftSum >= m) {
	// 		if(spliceExceptArr.length === 0) break;
	// 		let temp = spliceExceptArr.shift();
	// 		leftSum -= temp[1];
	// 		tempA += temp[0];
	// 	}
	// 	maxA = Math.min(maxA, tempA)
	// }
	// return maxA >= n ? -1 : maxA;


	// Second Attempt : Success
	if (info.reduce((acc, cur) => acc = acc + cur[1], 0) < m) return 0;

	const memo = new Map();
	let minA = Infinity;

	function dfs(i, aSum, bSum) {
		if(aSum >= n || bSum >= m) return;
		if(i === info.length){
			minA = Math.min(minA, aSum);
			return;
		}

		const key = `${i},${aSum},${bSum}`;
		if (memo.has(key)) return;
		memo.set(key, true);

		const [a, b] = info[i];

		dfs(i + 1, aSum + a, bSum);

		dfs(i + 1, aSum, bSum + b);
	}

	dfs(0, 0, 0);
	return minA === Infinity ? -1 : minA;
};

// console.log("result:: ", solution([[1, 2], [2, 3], [2, 1]], 4, 4)); // 2 > ok
console.log("result:: ", solution(  [[3, 1],[1, 3],[3, 1],[1, 3]], 5, 5)); // 2 > ok
// console.log("result:: ", solution([[3, 3], [3, 3]], 7, 1)); // 6
// console.log("result:: ", solution([[3, 3], [3, 3]], 6, 1)); // -1
// console.log("result:: ", solution([[1, 2], [2, 3], [2, 1]], 1, 7)); // 0 > ok
