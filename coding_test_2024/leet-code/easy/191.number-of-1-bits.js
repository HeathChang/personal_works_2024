// URL > https://leetcode.com/problems/number-of-1-bits/description/

const solution = (n) => {
	// First Attempt :: SUCCESS
	return n.toString(2).split("").reduce((acc, cur) => acc + ( cur === "1" ), 0);

	// Second Attempt :: SUCCESS
	return n.toString(2).replace(/0/g, "").length;
};

console.log("result:: ", solution(11)); // 3
