// URL > https://leetcode.com/problems/longest-palindrome/description/?envType=problem-list-v2&envId=string

const solution = (s) => {
	const newMap = new Map();
	s.split("").forEach(item => newMap.set(item, ( newMap.get(item) || 0 ) + 1));
	let returnValue = 0;
	let isFlag = false;

	for (const [key, value] of newMap) {
		if (value % 2 === 0) {
            returnValue += value;
		} else {
            returnValue += value - 1;
            isFlag = true;
		}
	}
	return returnValue + ( isFlag ? 1 : 0 );
};

console.log("result:: ", solution("abccccdd"));
console.log("result:: ", solution("Aa"));
console.log("result:: ", solution("ccc"));