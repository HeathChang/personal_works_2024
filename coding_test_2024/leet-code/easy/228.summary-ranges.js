// URL > https://leetcode.com/problems/summary-ranges/?envType=study-plan-v2&envId=top-interview-150

const solution = (nums) => {
    let result = [];
    let start = nums[0]; // Start of the current range

    for (let i = 1; i <= nums.length; i++) {
        // If current number is not consecutive, we end the current range
        if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
            if (start === nums[i - 1]) {
                // Single element range
                result.push(`${start}`);
            } else {
                // Range with more than one element
                result.push(`${start}->${nums[i - 1]}`);
            }
            // Update start to the new range
            start = nums[i];
        }
    }

    return result;
};

console.log("result:: ", solution([0,1,2,4,5,7]));   // ["0->2","4->5","7"]
console.log("result:: ", solution([0,2,3,4,6,8,9])); // ["0","2->4","6","8->9"]
