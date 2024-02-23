// URL > https://school.programmers.co.kr/learn/courses/30/lessons/135808

const solution = (k, m, score) => {
    let answer = 0;
    score.sort((a, b) => b - a);
    for (let i = 0; i < score.length; i += m) {
        const res = score.slice(i, i + m);
        if (res.length === m) {
            answer += (res[res.length - 1]) * m;
        }
    }
    return answer;
};

console.log("result:: ", solution(3, 4, [ 1, 2, 3, 1, 2, 3, 1 ]));