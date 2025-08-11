// URL > https://leetcode.com/problems/maximum-repeating-substring/description/

const solution = (sequence, word) => {
	let k = 0;
	let repeated = word;
	while (sequence.includes(repeated)) {
		k++;
		repeated += word;
	}
	return k;
};

console.log("result:: ", solution("ababc", "ab")); // 2
