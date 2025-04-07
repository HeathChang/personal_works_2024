const solution = (userEvent) => {
	const eventMap = userEvent.reduce((acc, cur) => {
		acc[cur] = ( acc[cur] || 0 ) + 1;
		return acc;
	}, {});
	const min = Math.min(...Object.values(eventMap));
	return Object.keys(eventMap).length * min;
};

console.log("result:: ", solution([1, 2, 1, 3, 4, 2, 4, 3, 3, 4]));
console.log("result:: ", solution([3, 3, 3]));
console.log("result:: ", solution([9, 8, 5, 9, 2]));
