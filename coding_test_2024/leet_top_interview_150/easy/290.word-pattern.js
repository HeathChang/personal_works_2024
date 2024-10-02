// URL > https://leetcode.com/problems/word-pattern/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (pattern, s) => {
	const words = s.split(" ");

	// If the number of words doesn't match the number of pattern characters, return false
	if (pattern.length !== words.length) {
		return false;
	}

	// Create two hash maps to track mappings: pattern -> word and word -> pattern
	const mapPatternToWord = new Map();
	const mapWordToPattern = new Map();

	for (let i = 0; i < pattern.length; i++) {
		const char = pattern[i];
		const word = words[i];

		// Check if the current character in the pattern has a mapping
		if (mapPatternToWord.has(char)) {
			if (mapPatternToWord.get(char) !== word) {
				return false; // Inconsistent mapping
			}
		} else {
			mapPatternToWord.set(char, word); // Add mapping from pattern to word
		}

		// Check if the current word has a mapping
		if (mapWordToPattern.has(word)) {
			if (mapWordToPattern.get(word) !== char) {
				return false; // Inconsistent mapping
			}
		} else {
			mapWordToPattern.set(word, char); // Add mapping from word to pattern
		}
	}

	return true; // The string follows the pattern
};

console.log("result:: ", solution("abba", "dog cat cat dog")); // true
console.log("result:: ", solution("abba", "dog cat cat fish")); // true
console.log("result:: ", solution("aaaa", "dog cat cat dog")); // true
