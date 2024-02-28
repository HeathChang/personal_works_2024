// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12945

// Algorithm: DP

const solution = (n) => {
    if (n <= 1) return n; // n이 0 또는 1인 경우, n을 그대로 반환
    const tempArr = [ 0, 1 ];
    for (let i = 2; i <= n; i++) {
        // tempArr[i] = tempArr[i - 1] + tempArr[i - 2];
        tempArr.push((tempArr[i-1] + tempArr[i-2]) % 1234567);
        // console.log(1, tempArr[i-1] + tempArr[i-2]) % 1234567

    }
    return tempArr[n];
};

console.log("result:: ", solution(10));


