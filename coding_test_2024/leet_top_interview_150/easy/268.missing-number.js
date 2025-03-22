// URL > https://leetcode.com/problems/missing-number/description/

const solution = (nums) => {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i;
    }

    return nums.length;
};

console.log("result:: ", solution([3,0,1]));
console.log("result:: ", solution([0,1]));
console.log("result:: ", solution([9,6,4,2,3,5,7,0,1]));