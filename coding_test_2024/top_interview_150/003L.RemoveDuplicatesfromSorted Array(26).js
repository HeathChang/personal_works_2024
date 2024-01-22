// URL > https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
// RUN-TIME > 68ms
// Memory > 52.72

const solution = (nums, val) => {
    const a = new Set(nums);
    nums.length = 0;
    nums.push(...a);
    return nums.length;
};

const result = solution([ 1, 1, 2 ]);
// const result = solution([ 0, 1, 2, 2, 3, 0, 4, 2 ], 2);
console.log("result:: ", result);


