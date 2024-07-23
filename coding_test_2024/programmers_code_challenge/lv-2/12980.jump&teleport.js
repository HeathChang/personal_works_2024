// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12980

const solution = (n) => {
	let totalBatteryUsage = 1;
	while (n !== 1) {
		if (n % 2 === 0) n /= 2;
		else {
			n -= 1;
			totalBatteryUsage += 1;
		}
	}
	return totalBatteryUsage;
};

console.log("result:: ", solution(5)); //2
console.log("result:: ", solution(6)); //2
console.log("result:: ", solution(5000)); //5
