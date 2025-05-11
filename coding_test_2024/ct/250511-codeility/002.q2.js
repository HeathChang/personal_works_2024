const solution = (S) => {
	const originSum = S.split('').reduce((sum, digit) => sum + +digit, 0);
	const isOriginDividable = originSum % 3 === 0;

	const divideNumSet = new Set();
	if (isOriginDividable) {
		divideNumSet.add(S);
	}

	for (let i = 0; i < S.length; i++) {
		const originDigit = +S[i];
		for (let j = 0; j <= 9; j++) {
			if (originDigit === j) continue;
			const newSum = originSum - originDigit + j;
			if (newSum % 3 === 0) {
				const newNumber = S.substring(0, i) + j + S.substring(i + 1);
				divideNumSet.add(newNumber);
			}
		}
	}

	return divideNumSet.size;
};

console.log("result:: ", solution("23")); // 7
console.log("result:: ", solution("0081")); // 11
console.log("result:: ", solution("022")); // 9
