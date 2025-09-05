// URL > https://leetcode.com/problems/subsets-ii/description/

const solution = (nums) => {
    nums.sort((a, b) => a - b); // sort to handle duplicates
    const result = [];
    const tempArr = [];

    const backtrack = (start) => {
        result.push([...tempArr]);

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;

            tempArr.push(nums[i]);
            backtrack(i + 1);
            tempArr.pop();
        }
    };

    backtrack(0);
    return result;
};

console.log("result:: ", solution([1,2,2]));
