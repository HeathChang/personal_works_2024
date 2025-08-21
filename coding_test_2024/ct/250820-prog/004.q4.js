// URL >

function solution(compressed) {
	const tempStack = [];
	let tempString = "";
	let tempCount = "";

	for (const char of compressed) {
		if (/\d/.test(char)) {
			tempCount += char;
		} else if (["(", ")"].includes(char)) {
			if (char === "(") {
				tempStack.push([tempString, +tempCount || 1]);
				tempString = "";
				tempCount = "";
			} else {
				const [prevStr, count] = tempStack.pop();
				tempString = prevStr + tempString.repeat(count);
			}
		} else {
			tempString += char;
		}
	}

	return tempString;
}


// 테스트
console.log(solution("3(hi)"));          // "hihihi"
console.log(solution("2(3(hi)co)"));     // "hihihicohihihico"
