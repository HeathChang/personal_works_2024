// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12922

const solution = (n) => {
    // 내풀이
    const share = Math.ceil(n / 2);
    let result = "";
    for (let i = 0; i < share; i++) {
        result += "수박";
    }
    if (n % 2 === 1) {
        result = result.slice(0, -1);
    }
    return result;

    // 남의 풀이
    return ("수박").repeat(n).substring(0, n);
};

const result = solution(3);
console.log("result:: ", result);
