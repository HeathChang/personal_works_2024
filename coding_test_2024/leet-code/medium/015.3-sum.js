// URL > https://leetcode.com/problems/3sum/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (nums) => {
	const returnArr = [];
	const hasSet = new Set();
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length - 2; i++) {
		if (i === 0 && nums[i] === nums[i - 1]) continue;
		let left = i + 1;
		let right = nums.length - 1;
		while (left < right) {
			let add = nums[i] + nums[left] + nums[right];
			if (add === 0) {
				const tempString = `${ nums[i] }${ nums[left] }${ nums[right] }`;
				if (!hasSet.has(tempString)) {
					hasSet.add(tempString);
					returnArr.push([nums[i], nums[left], nums[right]]);
				}
				left++;
				right--;
			} else if (add < 0) {
				left++;
			} else {
				right--;
			}

		}
	}
	return returnArr;
};

console.log("result:: ", solution([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log("result:: ", solution([0, 0, 0, 0])); // [[0,0,0]]
console.log("result:: ", solution([-2, 0, 1, 1, 2])); // [[-2,0,2],[-2,1,1]]
console.log("result:: ", solution([0, 1, 1])); // []
console.log("result:: ", solution([0, 0, 0])); // [[0,0,0]]
