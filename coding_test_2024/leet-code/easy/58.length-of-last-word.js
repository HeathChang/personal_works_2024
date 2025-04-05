// URL > https://leetcode.com/problems/length-of-last-word/?envType=study-plan-v2&envId=top-interview-150

const solution = (s) => {
	const split = s.trim().split(" ");
	return split[split.length - 1].length;
};

console.log("result:: ", solution("Hello World")); // 5
console.log("result:: ", solution("  fly me   to   the moon  ")); // 4
console.log("result:: ", solution("luffy is still joyboy")); // 6