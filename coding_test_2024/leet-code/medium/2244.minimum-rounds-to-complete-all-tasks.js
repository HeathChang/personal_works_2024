// URL > https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/

const solution = (tasks) => {
	const tempMap = new Map();
	for (let task of tasks) {
		tempMap.set(task, ( tempMap.get(task) || 0 ) + 1);
	}
	let rounds = 0;
	console.log(tempMap)
	for (const [key, value] of tempMap) {
		if (value === 1) return -1;
		console.log('round check:: ', rounds, value)
		rounds += Math.ceil(value / 3);
	}
	return rounds;
};

console.log("result:: ", solution([2, 2, 3, 3, 2, 4, 4, 4, 4, 4])); // 4
console.log("result:: ", solution([2, 3, 3])); // - 1