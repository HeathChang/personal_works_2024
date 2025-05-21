// URL > https://leetcode.com/problems/combination-sum/

const solution = (candidates, target) => {
	let returnArray = [];
	const backTrack = (startIndex, path, sum) => {
		if (sum === target){
			returnArray.push([...path]);
			return;
		}
		if (sum >= target) {

		}
        for (let i = startIndex; i < candidates.length; i++) { // 앞선 index 는 고려하지않음.
			if (sum + candidates[i] > target) break;
			path.push(candidates[i]);
            backTrack(i, path, sum + candidates[i]);
            path.pop(); // 다음 조합을 위해 그 숫자 선택 취소
        }
	};
	backTrack(0, [], 0);
	return returnArray;
};

console.log("result:: ", solution([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
console.log("result:: ", solution([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]