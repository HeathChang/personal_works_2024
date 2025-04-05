// URL::  https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

const solution = (str1, str2) => {
    if (str1 + str2 !== str2 + str1) return "";

    function innerFunc(a, b) {
        return b === 0 ? a : innerFunc(b, a % b);
    }

    return str1.substring(0, innerFunc(str1.length, str2.length));
};

console.log(solution("ABCABC", "ABC")); // Output: "ABC"
console.log(solution("ABABAB", "ABAB")); // Output: "AB"
console.log(solution("LEET", "CODE")); // Output: ""