// URL > https://leetcode.com/problems/generate-parentheses/description/

const solution = (n) => {
	if (n === 1) return ["()"];
	const returnArray = [];

	const backTrack = (open, close, path) => {
		// TODO:: 조건
		if (path.length === n * 2) {
			returnArray.push(path);
			return;
		}

		// TODO:: 회문
		if (open < n) {
			backTrack(open + 1, close, path + "(");
		}
         if (close < open) {
			backTrack(open, close + 1, path + ")");
		}
	};

	backTrack(0, 0 , "");

	return returnArray;
};

console.log("result:: ", solution(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log("result:: ", solution(1));