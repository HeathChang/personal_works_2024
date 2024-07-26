// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12985

const solution = (n, a, b) => {
	if (n === 2) return 1;
	let count = 0
	while (a !== b) {
		a = Math.ceil(a / 2);
		b = Math.ceil(b / 2);
		count++;
	}
	return count;
};

console.log("result:: ", solution(8, 4, 7)); //3
