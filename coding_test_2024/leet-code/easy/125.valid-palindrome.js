// URL > https://leetcode.com/problems/valid-palindrome/?envType=study-plan-v2&envId=top-interview-150

const solution = (s) => {
	const modified = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split("");
	for (let i = 0; i < Math.ceil(modified.length / 2); i++) {
		if (modified[i] !== modified[modified.length - 1 - i]) return false;
	}
	return true;
};

console.log("result:: ", solution("A man, a plan, a canal: Panama")); // true
console.log("result:: ", solution("race a car")); // false
console.log("result:: ", solution(" ")); // true
console.log("result:: ", solution("0P")); // false