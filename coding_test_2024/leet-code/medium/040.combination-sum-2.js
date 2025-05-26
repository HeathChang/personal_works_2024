// URL > https://leetcode.com/problems/combination-sum-ii/

const solution = (candidates, target) => {

	const returnArray = [];
	candidates.sort((a, b) => a - b);
	const backTrack = (startIndex, path, sum) => {
		if (sum === target) {
			returnArray.push([...path]);
			return;
		}
		for (let i = startIndex; i < candidates.length; i++) {
			if(i > startIndex && candidates[i] === candidates[i - 1]) continue;
			if (sum + candidates[i] > target) break;

			path.push(candidates[i]);
			backTrack(i + 1, path, sum + candidates[i]);
			path.pop();
		}
	};


	backTrack(0 , [], 0);
	return returnArray;

};

console.log("result:: ", solution([2, 5, 2, 1, 2], 5)); // [[1,2,2],[5]]
// console.log("result:: ", solution([10, 1, 2, 7, 6, 1, 5], 8)); // [[1,1,6],[1,2,5],[1,7],[2,6]]
