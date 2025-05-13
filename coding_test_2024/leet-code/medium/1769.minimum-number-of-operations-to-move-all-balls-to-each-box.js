// URL > https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/description/

const solution = (boxes) => {
    if(boxes.length === 1) return [0]
	let splitBox = boxes.split("");
	let returnArr = Array.from({ length: splitBox.length }, () => 0);
	for (let i = 0; i < splitBox.length; i++) {
		let count = 0;

		for (let j = 0; j < splitBox.length; j++) {
			if (i === j || splitBox[j] !== '1') {
				continue;
			}
			count += Math.abs(i - j);
			returnArr[i] = count;
		}
	}

	return returnArr;
};

// console.log("result:: ", solution("110"));//[1,1,3]
console.log("result:: ", solution("1000"));//[0,1,2,3]
// console.log("result:: ", solution("001011"));//[11,8,5,4,3,4]
