// URL > https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (s, t) => {
	let sIndex = 0;
	let tIndex = 0;

	while (sIndex < s.length && tIndex < t.length) {
		if (s[sIndex] === t[tIndex]) {
			sIndex++;
		}
		tIndex++;
	}
	return sIndex === s.length;
};

console.log("result:: ", solution("abc", "ahbgdc")); // true
console.log("result:: ", solution("axc", "ahbgdc")); // false