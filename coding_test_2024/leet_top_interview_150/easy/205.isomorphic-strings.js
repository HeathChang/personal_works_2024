// URL > https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (s, t) => {
	if (s.length !== t.length) return false;

	// Create two maps for one-to-one correspondence
	const mapST = new Map(); // Maps characters from s to t
	const mapTS = new Map(); // Maps characters from t to s

	for (let i = 0; i < s.length; i++) {
		const charS = s[i];
		const charT = t[i];

		// If there's a mismatch in the existing mapping, return false
		if (( mapST.has(charS) && mapST.get(charS) !== charT ) ||
			( mapTS.has(charT) && mapTS.get(charT) !== charS )) {
			return false;
		}

		// Otherwise, establish the mapping
		mapST.set(charS, charT);
		mapTS.set(charT, charS);
	}

	return true;
};

console.log("result:: ", solution("egg", "add")); // true
console.log("result:: ", solution("foo", "bar")); // false
console.log("result:: ", solution("paper", "title")); //true

