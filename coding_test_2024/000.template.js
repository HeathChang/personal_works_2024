// URL > https://leetcode.com/problems/single-number/
// RUN-TIME >
// Memory >
const solution = (nums, target) => {
    if (nums.length === 2) return [ 0, 1 ]; // prune > 무조건 정답이라 가정, length 가 2인 경우, [0,1]
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i + 1 ; j < nums.length ; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
};

const result = solution([-3,4,3,90], 0);
console.log("result:: ", result);
///

/**
 * ```

 * ```
 * */