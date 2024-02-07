// URL > https://leetcode.com/problems/single-number/
// RUN-TIME >
// Memory >
const solution = (n) => {
    // FAILED: 문제 이해못함

    const fib = [0, 1];

    // 2부터 n까지 피보나치 수를 계산하여 배열에 저장
    for (let i = 2; i <= n; i++) {
        fib[i] = (fib[i-1] + fib[i-2]) % 1234567;
    }

    // n번째 피보나치 수의 1234567로 나눈 나머지 반환
    return fib[n];

};

const result = solution(3);
console.log("result:: ", result);
