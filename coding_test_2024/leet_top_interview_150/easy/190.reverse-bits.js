// URL > https://leetcode.com/problems/reverse-bits/?envType=study-plan-v2&envId=top-interview-150

const solution = (n) => {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>>= 1;
    }
    return result >>> 0;
};

console.log("result:: ", solution("00000010100101000001111010011100"));
