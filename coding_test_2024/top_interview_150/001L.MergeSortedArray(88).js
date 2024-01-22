// URL > https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
// RUN-TIME > 49ms
// Memory > 78.99% of users with JavaScript
// NOTE: return 하지말고, nums1을 변환해라.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


const solution = (nums1, m, nums2, n) => {
    const newNums1 = nums1.splice(0, m);
    const newNums2 = nums2.splice(0, n);
    const newArr = newNums1.concat(newNums2).sort((a, b) => a - b);
    for (let i = 0; i < newArr.length; i++) {
        nums1[i] = newArr[i];
    }
};

const result = solution([ 1, 2, 3, 0, 0, 0 ], 3, [ 2, 5, 6 ], 3);
// const result = solution([ 1 ], 1, [], 0);
// const result = solution([ 0 ], 0, [ 1 ], 1);
console.log("result:: ", result);


