// URL > https://leetcode.com/problems/max-consecutive-ones/

const solution = (nums) => {
    let finalCount = 0;
    let tempCount = 0 ;
	for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 1){
            tempCount++;
        } else {
            finalCount = Math.max(finalCount, tempCount);
            tempCount = 0
        }
	}
    return Math.max(finalCount, tempCount);
};

console.log("result:: ", solution([1, 1, 0, 1, 1, 1])); // 3
console.log("result:: ", solution([1, 0, 1, 1, 0, 1])); // 2