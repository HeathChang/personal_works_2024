// URL > https://leetcode.com/problems/power-of-three/description/

const solution = (n) => {
    if (n < 1) return false;

    while (n % 3 === 0) {
        n /= 3;
    }

    return n === 1;
};

console.log("result:: ", solution(27));
console.log("result:: ", solution(0));