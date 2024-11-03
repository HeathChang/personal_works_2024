// URL > https://leetcode.com/problems/valid-anagram/?envType=study-plan-v2&envId=top-interview-150

const solution = (s, t) => {
    if(s.length !== t.length) return false
	const modifiedS = s.split("").sort();
	const modifiedT = t.split("").sort();

	for (let i = 0; i < modifiedS.length; i++) {
		if (modifiedS[i] !== modifiedT[i]) return false;
	}
	return true;
};

console.log("result:: ", solution("anagram", "nagaram")); // true
console.log("result:: ", solution("rat", "car")); // fasle
