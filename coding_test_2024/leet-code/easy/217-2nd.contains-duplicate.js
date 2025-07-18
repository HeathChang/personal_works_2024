// URL > https://leetcode.com/problems/contains-duplicate/description/

const solution = (nums) => {
    return new Set([...nums]).size !== nums.length
};

console.log("result:: ", solution([1,2,3,1])); // true
console.log("result:: ", solution([1,1,1,3,3,4,3,2,4,2])); // true
