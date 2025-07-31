// URL > https://leetcode.com/problems/sum-of-subarray-minimums/description

const solution = (arr) => {
	// First Attempt: BF > TLE
	// let result = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	let tempArr = [];
	// 	for (let j = i; j < arr.length; j++) {
	// 		tempArr.push(arr[j]);
	// 		result += Math.min(...tempArr);
	// 	}
	// }
	// return result % ( 10 ** 9 + 7 );

	// Second Attempt : MONO > SUCCESS
	const stack = [];
	let result = 0;
	const n = arr.length;

	const prev = Array(n).fill(-1); // 이전 더 작은 수 인덱스
	const next = Array(n).fill(n);  // 다음 더 작은 수 인덱스

	// 이전 더 작은 수
	for (let i = 0; i < n; i++) {
		while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
			next[stack.pop()] = i;
		}
		if (stack.length) prev[i] = stack[stack.length - 1];
		stack.push(i);
	}

	for (let i = 0; i < n; i++) {
		const left = i - prev[i];
		const right = next[i] - i;
		result = (result + arr[i] * left * right) % ( 10 ** 9 + 7 );
	}

	return result;

};

console.log("result:: ", solution([3, 1, 2, 4])); // 17
