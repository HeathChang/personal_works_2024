// URL > https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
// RUN-TIME > 55ms
// Memory > 44.96% of users with JavaScript

const solution = (nums, val) => {
    let arr = nums.filter(num => num !== val);
    nums.length = 0;
    nums.push(...arr);
    return nums.length;
};

const result = solution([ 3, 2, 2, 3 ], 3);
// const result = solution([ 0, 1, 2, 2, 3, 0, 4, 2 ], 2);
console.log("result:: ", result);


