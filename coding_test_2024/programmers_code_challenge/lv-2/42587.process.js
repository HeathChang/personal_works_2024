// URL >

const solution = (priorities, location) => {
	let queue = priorities.map((priority, index) => ( { priority, index } ));
	let processOrder = 0;

	while (queue.length > 0) {
		let current = queue.shift();
		if (queue.some((item) => item.priority > current.priority)) {
			queue.push(current);
		} else {
			processOrder += 1;
			if (current.index === location) {
				return processOrder;
			}
		}
	}
	return -1;
};

console.log("result:: ", solution([2, 1, 3, 2], 2)); // 1
// console.log("result:: ", solution([1, 1, 9, 1, 1, 1], 0)); // 5

