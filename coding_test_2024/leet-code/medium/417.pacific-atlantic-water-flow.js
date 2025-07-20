// URL > https://leetcode.com/problems/pacific-atlantic-water-flow/description/

const solution = (nums) => {
    const a = new Set(nums);
    nums.length = 0;
    console.log(nums)
};

console.log("result:: ", solution([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])); //  [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
console.log("result:: ", solution());