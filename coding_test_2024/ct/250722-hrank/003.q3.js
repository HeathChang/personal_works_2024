// question
// [1,3,1,2,1] 와 같이 배열이 주어진 경우, 해당 배열을 더 작은 두개의 중복되지 않는 배열로 나눌수 있다.
// 이때, 배열의 합중 최대값을 구하시오.

const solution = (nums) => {
	// First Attempt:
	let numMax = -Infinity;
	for (let i = 0; i < nums.length - 1; i++) {
		const b = [...nums];
		const a = b.splice(0, i + 1);

		const aSet = new Set([...a]);
		const bSet = new Set([...b]);

		numMax = ( numMax, aSet.size + bSet.size );
	}

	return numMax;
};

console.log("result:: ", solution([1, 3, 1, 2, 1])); // 4
