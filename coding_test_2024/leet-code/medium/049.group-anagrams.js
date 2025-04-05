// URL > https://leetcode.com/problems/group-anagrams/?envType=study-plan-v2&envId=top-interview-150

const solution = (strs) => {
	// 방법 1. resultArray 와 resultMap 두개 사용하고 리턴
	let result1 = [];
	let resultMap1 = new Map();
	for (let i = 0; i < strs.length; i++) {
		let temp = strs[i].split("").sort().join("");
		if (resultMap1.has(temp)) {
			result1[resultMap1.get(temp)].push(strs[i]);
		} else {
			// 없는 경우
			resultMap1.set(temp, resultMap1.size);
			result1.push([strs[i]]);
		}
	}
	return result1;


	// 방법 2. resultMap 에 넣어서 배열로 변환 후 리턴
	let resultMap2 = new Map();
	for (let i = 0; i < strs.length; i++) {
		let temp = strs[i].split("").sort().join("");
		if (resultMap2.has(temp)) {
			const prev = resultMap2.get(temp);
			prev.push(strs[i])
			resultMap2.set(temp, prev)
		} else {
			resultMap2.set(temp,[strs[i]]);
		}
	}

	return Array.from(resultMap2, ([key, value]) => value);

};

console.log("result:: ", solution(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log("result:: ", solution([""])); // [[""]]
console.log("result:: ", solution(["a"])); // [["a"]]
