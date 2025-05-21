// URL > https://leetcode.com/problems/combinations/

const solution = (n, k) => {
	if (n === 1) return [[n]];
	const returnArray = [];
	const backTrack = (startIndex, path) => {
        if(path.length === k){
            returnArray.push([...path])
        }

		for (let i = startIndex; i <= n; i++) {
            path.push(i);
            backTrack(i + 1, path)
            path.pop()
		}
	};
	backTrack(1, []);
	return returnArray;
};

console.log("result:: ", solution(4, 2)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
console.log("result:: ", solution(1, 1)); // [[1]]