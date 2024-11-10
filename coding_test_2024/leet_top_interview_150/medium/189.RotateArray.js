// URL > https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150
// RUN-TIME > 89ms
// Memory > 59.13

const solution = (nums, k) => {
    // MARK: passed, took long time
    //   for(let i = 0 ; i < k ; i++){
    //       const last = nums.pop();
    //       nums.unshift(last)
    //   }
    //   return nums


    // if (nums.length === 2) {
    //     if (k % 2 !== 0) {
    //         const a = nums[0]
    //         nums[0] = nums[1]
    //         nums[1] = a
    //     }
    // } else {
    //     const a = nums.slice(0, nums.length - k);
    //     const b = nums.slice(nums.length - k);
    //     const aa = b.concat(a);
    //     nums.length = 0;
    //     for (let i = 0; i < aa.length; i++) {
    //         nums[i] = aa[i]
    //     }
    // };

};

const result = solution([ 1, 2 ], 5);
// const result = solution([ 0, 1, 2, 2, 3, 0, 4, 2 ], 2);
console.log("result:: ", result);


