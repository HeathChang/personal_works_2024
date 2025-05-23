// URL > https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

const solution = (digits) => {
	if (!digits) return [];
	const keyboard = {
		"2": "abc",
		"3": "def",
		"4": "ghi",
		"5": "jkl",
		"6": "mno",
		"7": "pqrs",
		"8": "tuv",
		"9": "wxyz"
	};
	const returnArray = [];
	const backTrack = (index, path) => {
		// TODO:: stop 조건
		if(index === digits.length) {
			returnArray.push(path)
			return;
		}
		const letters = keyboard[digits[index]];
		for(const char of letters){
			backTrack(index+1, path+char)
		}
	};
	backTrack(0, "")

	return returnArray;

};

console.log("result:: ", solution("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log("result:: ", solution("")); // []
console.log("result:: ", solution("2")); // ["a","b","c"]