// URL > https://leetcode.com/problems/longest-palindromic-substring/description/

const solution = (s) => {
	if (s.length === 1) return s;

	// ATTEMPT 1. Centric Expression > 모든 s[i]을 중심으로 좌우대칭
	let start = 0;
	let end = 0;

	const getAroundValues = (left, right) => {
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			left--;
			right++;
		}
		return [left, right];
	};

	for (let i = 0; i < s.length; i++) {
		const [leftOdd, rightOdd] = getAroundValues(i, i); // 홀수 'abb'
		const [leftEven, rightEven] = getAroundValues(i, i + 1); // 짝수 'abbd'

		if (rightOdd - leftOdd > end - start) {
			start = leftOdd;
			end = rightOdd;
		}

		else if (rightEven - leftEven > end - start) {
			start = leftEven;
			end = rightEven;
		}
	}
	return s.substring(start + 1, end);

};

console.log("result:: ", solution("forgeeksskeegfor")); // geeks skeeg
console.log("result:: ", solution("babad")); // bab or aba
console.log("result:: ", solution("cbbd")); // bb
console.log("result:: ", solution("ac")); // a or c
console.log("result:: ", solution("abcdbbfcba")); // bb