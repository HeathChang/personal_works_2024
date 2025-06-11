// URL > https://leetcode.com/problems/triangle/

const solution = (triangle) => {
    if(triangle.length === 1) return triangle[0][0]
	const copiedTriangle = [...triangle];

	for (let i = 1; i < triangle.length; i++) {
		for (let j = 0; j < triangle[i]?.length; j++) {
			copiedTriangle[i][j] = Math.min(( copiedTriangle[i - 1]?.[j - 1] ?? Number.MAX_SAFE_INTEGER ), ( copiedTriangle[i - 1]?.[j] ?? Number.MAX_SAFE_INTEGER )) + triangle[i][j];
		}
	}
	return Math.min(...copiedTriangle[triangle.length - 1]);
};

console.log("result:: ", solution([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); // 11
console.log("result:: ", solution([[1], [-5, -2], [3, 6, 1], [-1, 2, 4, -3]])); // -3
console.log("result:: ", solution([[-10]])); // -10