// URL > https://leetcode.com/problems/climbing-stairs/

const solution = (n) => {
    if (n <= 2) return n;

    let first = 1, second = 2;

    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }

    return second;
};

console.log("result:: ", solution(2));
console.log("result:: ", solution(3));
