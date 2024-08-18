// URL > https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (strs) => {
    if (strs.length === 0) return "";
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
};

console.log("result:: ", solution(["flower","flow","flight"])); // fl
console.log("result:: ", solution(["dog","racecar","car"])); // ""
