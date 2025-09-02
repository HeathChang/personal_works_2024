// URL > https://leetcode.com/problems/integer-to-roman/description/

const solution = (num) => {
	if (!Number.isInteger(num) || num < 1 || num > 3999) return false;

	const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

	let i = 0;
	let res = "";

	while (num > 0) {
		while (num >= values[i]) {
			num -= values[i];
			res += symbols[i];
		}
		i++;
	}

	return res;
};

console.log("result:: ", solution(3));