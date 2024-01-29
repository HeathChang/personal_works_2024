// URL > https://leetcode.com/problems/reverse-words-in-a-string/submissions/1160054845/?envType=study-plan-v2&envId=top-interview-150

const solution = (s) => {
    const arr = s.trim().split(" ").filter(item => item !== "");
    return arr.reverse().join(" ");
};

const result = solution("a good   example");
console.log("result:: ", result);
