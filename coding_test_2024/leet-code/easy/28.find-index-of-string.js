// URL > https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (haystack, needle) => {
    return haystack.indexOf(needle)
};

console.log("result:: ", solution("sadbutsad","sad"));
console.log("result:: ", solution("leetcode","leeto"));
console.log("result:: ", solution("hello","ll"));
