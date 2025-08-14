// URL > https://leetcode.com/problems/counting-bits/description/

const solution = (n) => {
    // First Attempt::
    // const ans = new Array(n + 1).fill(0);
    // for (let i = 1; i <= n; i++) {
    //     ans[i] = ans[i & (i - 1)] + 1;
    // }
    // return ans;

    // Second Attempt::
    const ans = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
};

console.log("result:: ", solution(2));
console.log("result:: ", solution(5));