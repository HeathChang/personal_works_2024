// URL > https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/description/

const solution = (n) => {
	return +n.split("").reduce((acc, cur) => acc < cur ? cur : acc, "0");
};

console.log("result:: ", solution("32")); // 3
console.log("result:: ", solution("82734")); // 8
console.log("result:: ", solution("27346209830709182346")); // 9
