// URL > https://leetcode.com/problems/fizz-buzz/description/?envType=problem-list-v2&envId=string

const solution = (n) => {
	const returnArr = [];
	for (let i = 1; i <= n; i++) {
		let temp = ''
		if (i % 15 === 0) temp = "FizzBuzz";
		else if (i % 3 === 0) temp = "Fizz";
		else if (i % 5 === 0) temp = "Buzz";
		else temp = i;
		returnArr[i-1] = `${temp}`;
	}
	return returnArr;
};

console.log("result:: ", solution(3));
console.log("result:: ", solution(5));
// console.log("result:: ", solution(15));
