// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12917
const solution = (n) => {
    return n.split("").sort().reverse().join("")
};

const result = solution('Zbcdefg');
console.log("result:: ", result);
