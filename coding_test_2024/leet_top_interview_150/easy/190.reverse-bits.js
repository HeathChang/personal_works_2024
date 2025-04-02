// URL > https://leetcode.com/problems/reverse-bits/?envType=study-plan-v2&envId=top-interview-150

const solution = (n) => {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);  // 주어진 숫자 n을 비트 단위로 오른쪽에서 왼쪽으로 읽어 result에 저장
        n >>>= 1; // n의 마지막 비트를 떼어내면서 한 칸씩 이동 후, 할당
    }
    return result >>> 0;
};

console.log("result:: ", solution("00000010100101000001111010011100"));
