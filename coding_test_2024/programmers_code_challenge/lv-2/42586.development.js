// URL > https://school.programmers.co.kr/learn/courses/30/lessons/42586

const solution = (progresses, speeds) => {
	let resultArr = [];
	const tempArr = progresses.map((item, i) => Math.ceil(( 100 - progresses[i] ) / speeds[i]));
	let point = tempArr[0];
	let count = 1;

	for (let i = 1; i < tempArr.length; i++) {
		if (point >= tempArr[i]) {
			count += 1;
		} else {
			resultArr.push(count);
			count = 1;
			point = tempArr[i];
		}

		if (i === tempArr.length - 1) resultArr.push(count);
	}
	return resultArr;
};

console.log("result:: ", solution([93, 30, 55], [1, 30, 5]));
console.log("@@@@@@@@");
console.log("result:: ", solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

