// URL > https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (ransomNote, magazine) => {
	// Create an object to store the letter frequencies of the magazine
	const letterCount = {};

	// Count each letter in the magazine
	for (let letter of magazine) {
		letterCount[letter] = ( letterCount[letter] || 0 ) + 1;
	}

	// Check if ransomNote can be constructed from the magazine
	for (let letter of ransomNote) {
		if (!letterCount[letter]) {
			return false; // Letter not available or used up
		}
		letterCount[letter]--; // Use the letter
	}

	return true; // Successfully constructed ransom note
};

console.log("result:: ", solution("a", "b")); // false
console.log("result:: ", solution("aa", "ab")); // false
console.log("result:: ", solution("aa", "aab")); // true