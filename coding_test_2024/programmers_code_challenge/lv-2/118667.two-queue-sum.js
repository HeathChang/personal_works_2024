// URL >

const solution = (queue1, queue2) => {
	let sum1 = queue1.reduce((acc, cur) => acc += cur);
	let sum2 = queue2.reduce((acc, cur) => acc += cur);
	let target = ( sum1 + sum2 ) / 2;
	const maxCount = (queue1.length) * 2 + 1;
	let count = 0;

	const flag = queue1.concat(queue2).filter(item => item > target);
	if (flag.length !== 0) return -1;

	let queue1Index = 0;
	let queue2Index = 0;

	while (!( sum1 === sum2 )) {
		if (sum1 > sum2) {
			let element1 = queue1[queue1Index];
			queue1Index += 1;
			queue2.push(element1);
			sum2 = sum2 + element1;
			sum1 = sum1 - element1;

		} else if (sum1 < sum2) {
			let element2 = queue2[queue2Index];
			queue2Index += 1;
			queue1.push(element2);
			sum2 = sum2 - element2;
			sum1 = sum1 + element2;
		}
		count += 1;
		if (count > maxCount) return -1;
	}
	return count;
};

console.log("result:: ", solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log("result:: ", solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log("result:: ", solution([1, 1], [1, 5])); // -1
console.log("result:: ", solution([10, 5, 1], [2, 2, 2])); // -1
console.log("result:: ", solution([1, 1, 1, 1], [1, 1, 7, 1])); // -1
