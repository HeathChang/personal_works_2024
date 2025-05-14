// URL > https://leetcode.com/problems/the-kth-factor-of-n/description/

const solution = (n, k) => {
	const testSet = new Set();
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) testSet.add(i);
	}
	return [...testSet][k - 1] ? [...testSet][k - 1] : -1;
};

console.log("result:: ", solution(12, 3)); // 3
console.log("result:: ", solution(7, 2)); // 7
console.log("result:: ", solution(4, 4)); // -1