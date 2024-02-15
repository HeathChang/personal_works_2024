// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12910

const solution = (arr, divisor) => {
    const res = arr.sort((a, b) => a-b).filter(item => item % divisor === 0);
    if (res.length === 0) {
        return [ -1 ];
    }
    return res;

};

const result = solution([ 5, 9, 7, 10 ], 5);
console.log("result:: ", result);
