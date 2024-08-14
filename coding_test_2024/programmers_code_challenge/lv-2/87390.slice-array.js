// URL > https://school.programmers.co.kr/learn/courses/30/lessons/87390

const solution = (n, left, right) => {

	// 방안 1. 2차원 배열에서 전체 값 찾기 > 시간초과
	// const resultArr = Array.from({ length: n }, () => Array(n).fill(-1));
	//
	// for (let i = 0; i < n; i++) {
	// 	for (let j = 0; j < n; j++) {
	// 		resultArr[j][i] = i >= j ? i + 1 : j + 1;
	// 	}
	// }
	// return resultArr.flat().slice(left, right+1);

	// 방안 2. 1차원 배열에서 해당되는 값만 찾기 > 성공
	let result = [];
	for (let i = left; i <= right; i++) {
		// Find the row (i / n) and column (i % n) from the index
		let row = Math.floor(i / n);
		let col = i % n;

		result.push(Math.max(row, col) + 1);
	}

	return result;

};

console.log("result:: ", solution(3, 2, 5)); // [3,2,2,3]
// console.log("result:: ", solution(4, 7, 14)); // [4,3,3,3,4,4,4,4]
