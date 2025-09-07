// URL > https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/description/

const solution = (n) => {
	const res = [];
	const cur = [];

	function dfs(i) {
		if (i === n) {
			res.push(cur.join(''));
			return;
		}
		cur.push('1');
		dfs(i + 1);
		cur.pop();

		if (i === 0 || cur[cur.length - 1] !== '0') {
			cur.push('0');
			dfs(i + 1);
			cur.pop();
		}
	}

	dfs(0);
	return res;
};

console.log("result:: ", solution(3)); // ["010","011","101","110","111"]
