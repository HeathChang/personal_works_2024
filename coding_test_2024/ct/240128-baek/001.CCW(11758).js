// URL > https://www.acmicpc.net/problem/11758
const solution = (x1, y1, x2, y2, x3, y3) => {
    const result = ((x2 - x1) * (y3 - y1)) - ((x3 - x1) * (y2 - y1));
    return (result === 0) ? 0 : (result > 0) ? 1 : -1;
};

const result = solution(1, 1, 5, 5, 7, 3); // return should be -1
// const result = solution(1, 1, 3, 3, 5, 5); // return should be 0
// const result = solution(1, 1, 7, 3, 5, 5); // return should be 1
console.log("result:: ", result);