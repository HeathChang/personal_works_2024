// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12932

const solution = (n) => {
    // String(n).split('').map(str=>Number(str)).reverse()
    return `${n}`.split("").map(i => parseInt(i)).reverse()
};

const result = solution(12345);
console.log("result:: ", result);
