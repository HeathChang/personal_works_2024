// URL > https://leetcode.com/problems/summary-ranges/?envType=study-plan-v2&envId=top-interview-150

const solution = (nums) => {
    const a = new Set(nums);
    nums.length = 0;
    console.log(nums)
};

console.log("result:: ", solution([0,1,2,4,5,7]));   // ["0->2","4->5","7"]
console.log("result:: ", solution([0,2,3,4,6,8,9])); // ["0","2->4","6","8->9"]
