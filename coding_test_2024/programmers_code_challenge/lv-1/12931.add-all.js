// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12931

const solution = (n) => {
    return n.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b));
};

const result = solution(123);
console.log("result:: ", result);
