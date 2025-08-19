// URL > () {} [] 제대로 구성되어있는지

const solution = (n) => {
	if (n.length % 2 !== 0 || [')', '}', ']'].includes(n[0])) return false;
	const stackArr = [];
	stackArr[0] = n[0];

	for (let i = 0; i < n.length; i++) {
		const prevIndex = stackArr.length - 1;
		const char = n[i];
		if (['(', '{', '['].includes(char)) {
			stackArr.push(char);
		} else {
			if (stackArr.length === 0) return false;
			if (!( ( stackArr[prevIndex] === '(' && char === ")" ) || ( stackArr[prevIndex] === '{' && char === "}" ) || ( stackArr[prevIndex] === '[' && char === "]" ) )) return false;
			stackArr.pop();
		}
	}
	return true;

};

console.log("result:: ", solution("{}[]"));
console.log("result:: ", solution("(([]){})"));
console.log("result:: ", solution("(([]]{})"));
