// URL > https://leetcode.com/problems/minimum-levels-to-gain-more-points/

const solution = (possible) => {
	// FIRST ATTEMPT: FAILED > TIME LIMIT
	// const totalPoint = possible.reduce((acc, val) => acc + ( val === 1 ? 1 : -1 ), 0);
	//
	// for (let i = 0; i < possible.length; i++) {
	// 	if (i === possible.length - 1) break;
	// 	const alicePoint = [...possible].slice(0, i + 1).reduce((acc, val) => acc + ( val === 1 ? 1 : -1 ), 0);
	// 	const bobPoint = totalPoint - alicePoint;
	// 	if (alicePoint > bobPoint) return i + 1;
	// }
	// return -1;

	// SECOND ATTEMPT:
	const totalPoint = possible.reduce((acc, val) => acc + ( val === 1 ? 1 : -1 ), 0);
	const sumArray = new Array(possible.length);
	sumArray[0] = possible[0] === 1 ? 1 : -1;

	for (let i = 0; i < possible.length - 1; i++) {
		if (i !== 0) sumArray[i] = ( sumArray[i - 1] ) + ( possible[i] === 1 ? 1 : -1 );
		const alicePoint = sumArray[i];
		const bobPoint = totalPoint - alicePoint;
		if (alicePoint > bobPoint) return i + 1;
	}
	return -1;
};

console.log("result:: ", solution([1, 0, 1, 0])); // 1
console.log("result:: ", solution([1, 1, 1, 1, 1])); // 3
console.log("result:: ", solution([0, 0])); // -1
console.log("result:: ", solution([0, -1])); // -1
console.log("result:: ", solution([1, 1])); // -1