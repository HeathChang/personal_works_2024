// URL > https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

const solution = (s) => {
	// Attemp1.
	// if (s.length === 1) return 1;
	// let tempMap = new Map();
	// let start = 0;
	// let longestSubstring = 0;
	// for (let i = 0; i < s.length; i++) {
	// 	const current = s[i];
	// 	if (tempMap.has(current) && tempMap.get(current) >= start) {
	// 		start = tempMap.get(current) + 1;
	// 	}
	// 	tempMap.set(current, i);
	// 	longestSubstring = Math.max(longestSubstring, i - start + 1);
	// }
	// return longestSubstring;


	// Attempt2.
	if (s.length === 1) return 1;
	let left = 0;
	let right = 0;
	const seen = new Set();
	let maxLength = 0;

	while (right < s.length) {
		const char = s[right];

		while (seen.has(char)) {
			seen.delete(s[left]);
			left++;
		}

		seen.add(char);
		maxLength = Math.max(maxLength, right - left + 1);
		console.log('end:: ', s[right], seen);
		right++;

	}

	return maxLength;

};

// console.log("result:: ", solution("abcabcbb")); // 3
// console.log("result:: ", solution("dvdf")); // 3
// console.log("result:: ", solution("bbbbbbb")); // 1 (b)
// console.log("result:: ", solution("pwwkew")); // 3
// console.log("result:: ", solution("qrsvbspk")); // 5
console.log("result:: ", solution("bpfbhmipx")); // 7 > fbhmipx
// console.log("result:: ", solution("au")); // 2 > au