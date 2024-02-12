// URL > https://school.programmers.co.kr/learn/courses/30/lessons/87389

const solution = (n) => {
    for (let i = 1; i <= n; i++) {
        if (n % i === 1) {
            return i;
        }
    }
};

const result = solution(10);
console.log("result:: ", result);
///

/**
 * ```

 * ```
 * */