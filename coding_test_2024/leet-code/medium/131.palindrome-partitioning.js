// URL > https://leetcode.com/problems/palindrome-partitioning/description/?envType=problem-list-v2&envId=dynamic-programming

const solution = (s) => {
	const result = [];

	const isPalindrome = (str) => {
		let left = 0;
		let right = str.length - 1;
		while (left < right) {
			if (str[left] !== str[right]) return false;
			left++;
			right--;
		}
		return true;
	};


	const backTrack = (start, path) => {
		if (start === s.length) {
			result.push([...path]);
			return;
		}
		for (let end = start + 1; end <= s.length; end++) {
			const slice = s.slice(start, end);
			if (isPalindrome(slice)) {
				path.push(slice);
				backTrack(end, path);
				path.pop();
			}
		}
	};
	backTrack(0, []);
	return result;
};

console.log("result:: ", solution("aab")); // [["a","a","b"],["aa","b"]]
console.log("result:: ", solution("a")); // [["a"]]