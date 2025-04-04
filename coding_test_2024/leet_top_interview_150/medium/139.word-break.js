// URL > https://leetcode.com/problems/word-break/?envType=study-plan-v2&envId=top-interview-150

const solution = (s, wordDict) => {
	// attempt 1::
	const wordDictSet = new Set(wordDict);
	const stringArray = Array.from({ length: s.length + 1 }).fill(false);
	stringArray[0] = true;

	for (let i = 1; i <= s.length; i++) {
		for (let j = 0; j < i; j++) {
			if (stringArray[j] && wordDictSet.has(s.substring(i, j))) {
				stringArray[i] = true;
				break;
			}
		}
	}
	return stringArray[s.length];
};

console.log("result:: ", solution("leetcode", ["leet", "code", "leet", "leet"])); // true
console.log("result:: ", solution("applepenapple", ["apple", "pen"])); // true
console.log("result:: ", solution("catsandog", ["cats", "dog", "sand", "and", "cat"])); // true