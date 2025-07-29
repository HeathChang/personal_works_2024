// URL > https://leetcode.com/problems/sort-colors/

const solution = (nums) => {
	if (nums.length === 1) return [[], nums];
	const returnArray = [];

	const backTrack = (index, path) => {
		returnArray.push([...path]);

		for (let i = index; i < nums.length; i++) {
			path.push(nums[i]);
			backTrack(i + 1, path);
			path.pop();
		}
	};
	backTrack(0, []);

	return returnArray;


};

console.log("result:: ", solution([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// console.log("result:: ", solution([0])); // [[],[0]]