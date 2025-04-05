// URL > https://leetcode.com/problems/number-of-segments-in-a-string/description/

const solution = (s) => {
    return s.trim().split(/\s+/).filter(Boolean).length;
};

console.log("result:: ", solution("Hello, my name is John"));
console.log("result:: ", solution("Hello"));