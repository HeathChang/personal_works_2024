// URL > https://leetcode.com/problems/4sum/description/

const solution = (nums, target) => {
	nums.sort((a, b) => a - b);
	const returnArray = [];
	const tempStringMap = new Set();
	const nLength = nums.length;
	for (let i = 0; i < nLength - 3; i++) {
		for (let j = i + 1; j < nLength - 2; j++) {
			let left = j + 1;
			let right = nLength - 1;
			while (left < right) {
				let sum = nums[i] + nums[j] + nums[left] + nums[right];
				if (sum === target) {
					let tempString = `${ nums[i] }${ nums[j] }${ nums[left] }${ nums[right] }`;
					if (!tempStringMap.has(tempString)) {
						returnArray.push([nums[i], nums[j], nums[left], nums[right]]);
						tempStringMap.add(tempString);
					}
					left++;
					right--;

				} else if (sum < target) {
					left++;
				} else {
					right--;
				}

			}
		}
	}
	return returnArray;
};


// console.log("result:: ", solution([1, 0, -1, 0, -2, 2], 0)); //[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// console.log("result:: ", solution([2, 2, 2, 2, 2], 8)); // [[2,2,2,2]]
console.log("result:: ", solution([-3, -2, -1, 0, 0, 1, 2, 3], 0)); // [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]