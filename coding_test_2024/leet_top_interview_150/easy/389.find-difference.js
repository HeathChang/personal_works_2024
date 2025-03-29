// URL > https://leetcode.com/problems/find-the-difference/description/

const solution = (s, t) => {
	// first attempt:
	// if (s.length === 0) return t;
	// for (let i = 0; i < s.length; i++) {
	// 	t = t.replace(s[i], "")
	// }
	// return t;

	// second attempt:
	if (s.length === 0) return t;

	s = [...s].sort();
	t = [...t].sort();
	for(let i = 0 ; i < s.length; i++){
		if(s[i] !== t[i]) return t[i]
	}
	return t[t.length - 1];


};

console.log("result:: ", solution("abcd", "abcde"));
console.log("result:: ", solution("", "y"));