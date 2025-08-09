// URL > https://leetcode.com/problems/sort-characters-by-frequency/description/

const solution = (s) => {
	const sMap = new Map();

	for (let i = 0; i < s.length; i++) {
		if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
		else sMap.set(s[i], 1);
	}

	const sortedArr = [...sMap].sort((a, b) => b[1] - a[1]);
	let returnString = "";
	for (let i = 0; i < sortedArr.length; i++) {
		let count = 0;
		const [cha, trial] = sortedArr[i];
		while (count < trial) {
			count++;
			returnString += cha;
		}
	}
	return returnString;

};

console.log("result:: ", solution("raaeaedere")); // eeeeaaarrd
console.log("result:: ", solution("tree")); // eert