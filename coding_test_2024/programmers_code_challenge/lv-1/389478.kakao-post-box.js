// URL > https://school.programmers.co.kr/learn/courses/30/lessons/389478

const solution = (n, w, num) => {
	let returnArr = [];
	const height = Math.ceil(n / w);
	for (let i = 0; i < height; i++) {
		const temp = i % 2 === 0
			? Array.from({ length: w }, ( (_, idx) => ( i * w + idx + 1 > n ? null : i * w + idx + 1 ) ))
			: Array.from({ length: w }, ( (_, idx) => ( i * w + idx + 1 > n ? null : i * w + idx + 1 ) )).reverse();
		returnArr.push(temp);
	}
	let counter = 0;
	let idx = -1;

	for (let i = 0; i < returnArr.length; i++) {
		for (let j = 0; j < returnArr[i].length; j++) {
			if (returnArr[i][j] === num) idx = j;
			if (returnArr[i][j] >= num && idx === j) counter++;
		}
	}
	return counter;
};

console.log("result:: ", solution(22, 6, 8)); // 3
console.log("result:: ", solution(13, 3, 6)); // 4
