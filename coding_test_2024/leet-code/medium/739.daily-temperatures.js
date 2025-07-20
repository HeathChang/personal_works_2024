// URL > https://leetcode.com/problems/daily-temperatures/description/

const solution = (temperatures) => {
	// First Attempt: Time Limit
	// const returnArr = [];
	//
	// for (let i = 0; i < temperatures.length; i++) {
	// 	if (i === temperatures.length - 1) {
	// 		returnArr.push(0);
	// 		return returnArr;
	// 	}
	//
	// 	const tempArr = [...temperatures].splice(i, temperatures.length);
	// 	let tempIndex = tempArr.findIndex(item => item > temperatures[i]);
	// 	if (tempIndex === -1) tempIndex = 0;
	//
	// 	returnArr.push(tempIndex);
	// }
	//
	// return returnArr;

	// Second Attempt :
	const returnArr = new Array(temperatures.length).fill(0);
	const stack = []; // 인덱스를 저장하는 스택

	for (let i = 0; i < temperatures.length; i++) {
		// 현재 온도가 스택의 top 인덱스 온도보다 높으면 더 따뜻한 날 발견
		while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
			const prevIndex = stack.pop();
			returnArr[prevIndex] = i - prevIndex;
		}
		stack.push(i);
	}

	return returnArr;

};

console.log("result:: ", solution([73, 74, 75, 71, 69, 72, 76, 73])); //  [1,1,4,2,1,1,0,0]
console.log("result:: ", solution([30, 40, 50, 60])); // [1,1,1,0]