// URL > https://school.programmers.co.kr/learn/courses/30/lessons/131701

const solution = (elements) => {
	const originLength = elements.length;
	const arr = [...elements, ...elements];
	let set = new Set();

	for (let i = 1; i < originLength; i++) {
		for (let j = 0; j < originLength; j++) {
			let sum = 0;
			for (let k = 0; k < i; k++) {
				sum += arr[j + k];
			}
			set.add(sum);
		}
	}


	return set.size;


};

console.log("result:: ", solution([7, 9, 1, 1, 4])); //18
