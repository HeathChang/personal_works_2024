// URL > https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
// RUN-TIME > 68ms
// Memory > 52.72

const solution = (nums) => {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {

        if (i > max) return false;
        if (max >= nums.length - 1) return true;
        max = Math.max(max, i + nums[i]);
    }
};

const result = solution([2,3,1,1,4]);
// const result = solution([ 0, 1, 2, 2, 3, 0, 4, 2 ], 2);
console.log("result:: ", result);


