const solution = (X, Y, A) => {
	var N = A.length;
	var result = -1;
	var nX = 0;
	var nY = 0;
	for (var i = 0; i < N; i++) {
		if (A[i] === X)
			nX += 1;
		if (A[i] === Y) {
			nY += 1;
		}
		if (nX === nY && ( nX > 0 || nY > 0 )) {
			result = i;
		}
	}
	return result;
};

console.log("result:: ", solution(7, 42, [6, 42, 11, 7, 1, 42])); // 4
console.log("result:: ", solution(5, 5, [5, 1, 2, 3, 4, 5])); // 5
console.log("result:: ", solution(7, 42, [1, 2, 3])); // -1
console.log("result:: ", solution(6, 13, [13, 13, 1, 6])); // -1
console.log("result:: ", solution(100, 63, [100, 63, 1, 6, 2, 13])); // 5
