// URL > https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (nums) => {
    // 방법1.
    if (nums.length <= 2) return nums.length;
    let aMap = new Map();
    let tempCounter = 0;
	for (let i = 0; i < nums.length; i++) {
        if(aMap.has(nums[i])){
            const count = aMap.get(nums[i]);
            if(count < 2) {
                nums[i] = nums[i];
                aMap.set(nums[i], count + 1);
            } else {
                nums[i] = Number.MAX_SAFE_INTEGER;
                tempCounter+= 1
            }
        } else {
            nums[i] = nums[i];
            aMap.set(nums[i], 1)
        }
	}
    nums.sort((a, b) => a - b)
    return nums.length - tempCounter ;
};

console.log("result:: ", solution([1, 1, 1, 2, 2, 3])); // [1,1,2,2,3]
console.log("result:: ", solution([0, 0, 1, 1, 1, 1, 2, 3, 3])); // [0,0,1,1,2,3,3]
console.log("result:: ", solution([-3,-1,0,0,0,3,3])); // [0,0,1,1,2,3,3]