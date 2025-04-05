// URL > https://leetcode.com/problems/add-digits/description/

const solution = (nums) => {
    const split = nums.toString().split("");
    let sum = 0;
    sum = split.reduce((acc, cur)=> acc+= (+cur), 0);
    if(sum.toString().length !== 1)sum = solution(sum);
    return sum;
};

console.log("result:: ", solution(38));
console.log("result:: ", solution(0));