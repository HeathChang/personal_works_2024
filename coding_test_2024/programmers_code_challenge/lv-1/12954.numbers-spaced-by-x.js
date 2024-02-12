// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12954

const solution = (x, n) => {
    return Array(n).fill(x).map((num, i) => {
        return num * (i + 1)
    });
};

// const result = solution(2, 5);
const result = solution(-4, 5);
console.log("result:: ", result);
///

/**
 * ```

 * ```
 * */