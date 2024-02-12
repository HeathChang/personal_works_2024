// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12944

const solution = (arr) => {
    return arr.reduce((a, b) => a + b)/arr.length;
    // reducer:
};

const result = solution([ 1, 2, 3, 4 ]);
console.log("result:: ", result);
