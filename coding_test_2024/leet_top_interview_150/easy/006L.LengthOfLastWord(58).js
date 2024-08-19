// URL > https://leetcode.com/problems/length-of-last-word/?envType=study-plan-v2&envId=top-interview-150
// RUN-TIME >
// Memory >
const solution = (s) => {
    const arr= s.trim().split(" ")
    return arr[arr.length - 1].length
};

const result = solution("Hello World");
console.log("result:: ", result);