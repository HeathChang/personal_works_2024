// URL > https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (nums) => {
    const a = new Set(nums);
    nums.length = 0;
    console.log(nums)
};

console.log("result:: ", solution([1,1,2]));
console.log("result:: ", solution([0,0,1,1,1,2,2,3,3,4]));