// URL > https://school.programmers.co.kr/learn/courses/30/lessons/68935

const solution = (n) => {
    return parseInt(n.toString(3).split("").reverse().join(""), 3);
};

console.log("result:: ", solution(45));
