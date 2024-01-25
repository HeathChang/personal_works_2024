// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12982
// RUN-TIME >
// Memory >

const solution = (d, budget) => {
    const arr = d.sort((a, b) => a - b).filter(item => {
        if (budget - item >= 0) {
            budget -= item;
            return true;
        }
        return false;
    });
    return arr.length;
};

const result = solution([ 1, 3, 2, 5, 4 ], 9); // result: 3
console.log("result:: ", result);
