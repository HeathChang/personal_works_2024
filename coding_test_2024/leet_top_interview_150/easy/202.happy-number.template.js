// URL > https://leetcode.com/problems/happy-number/?envType=study-plan-v2&envId=top-interview-150

const solution = (n) => {
	let targetNumber = n;
	let repeatSet = new Set();
	while (true) {
		targetNumber = `${ targetNumber }`.split("").reduce((acc, cur) => {return acc += cur ** 2;}, 0);
		if (targetNumber === 1) {
			return true;
		} else if (repeatSet.has(targetNumber)) {
			return false;
		} else {
			repeatSet.add(targetNumber);
		}
	}
};

console.log("result:: ", solution(19));
console.log("result:: ", solution(2));