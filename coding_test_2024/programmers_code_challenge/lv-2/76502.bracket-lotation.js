// URL > https://school.programmers.co.kr/learn/courses/30/lessons/76502

const solution = (s) => {
	const isValid = (str) => {
		const stack = [];
		const pairs = { ')': '(', ']': '[', '}': '{' };

		for (const char of str) {
			if (['(', '[', '{'].includes(char)) {
				stack.push(char);
			} else if ([')', ']', '}'].includes(char)) {
				if (stack.length === 0 || stack.pop() !== pairs[char]) {
					return false;
				}
			}
		}
		return stack.length === 0;
	};

	let validCount = 0;
	for (let i = 0; i < s.length; i++) {
		const rotated = s.slice(i) + s.slice(0, i);
		if (isValid(rotated)) {
			validCount++;
		}
	}

	return validCount;
};

console.log("result:: ", solution("[](){}")); // 3
console.log("result:: ", solution("}]()[{")); // 2
console.log("result:: ", solution("[)(]")); // 0
console.log("result:: ", solution("}}}")); // 0
