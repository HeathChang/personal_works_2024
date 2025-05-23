// URL > https://leetcode.com/problems/palindrome-number/description/

const solution = (x) => {
	if (x < 0 || ( x % 10 === 0 && x !== 0 )) return false;

	let reversed = 0;
	let original = x;

	while (x > 0) {
		reversed = reversed * 10 + ( x % 10 );
		x = Math.floor(x / 10);
	}

	return original === reversed;
};

console.log("result:: ", solution(121));
console.log("result:: ", solution(-121));