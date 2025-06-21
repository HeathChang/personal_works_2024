// URL > https://leetcode.com/problems/4sum-ii/description/

const solution = (nums1, nums2, nums3, nums4) => {
	let returnCounter = 0;
	const numsOneTwoMap = new Map();
	const numsThreeFourMap = new Map();
	for (let item1 of nums1) {
		for (let item2 of nums2) {
			const sum = item1 + item2;
			numsOneTwoMap.set(sum, ( numsOneTwoMap.get(sum) || 0 ) + 1);
		}
	}

	for (let item1 of nums3) {
		for (let item2 of nums4) {
			const sum = item1 + item2;
			numsThreeFourMap.set(sum, ( numsThreeFourMap.get(sum) || 0 ) + 1);
		}
	}
	// console.log(1, numsOneTwoMap)
	// console.log(2, numsThreeFourMap)

	for (let [key1, val1] of numsOneTwoMap) {
		const complement = -key1;
		if (numsThreeFourMap.has(complement)) returnCounter += val1 * numsThreeFourMap.get(complement);
	}


	return returnCounter;
};

console.log("result:: ", solution([1, 2], [-2, -1], [-1, 2], [0, 2])); // 2
console.log("result:: ", solution([-1, -1], [-1, 1], [-1, 1], [1, -1])); // 6
