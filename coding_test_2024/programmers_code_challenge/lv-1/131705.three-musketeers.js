// URL > https://school.programmers.co.kr/learn/courses/30/lessons/131705

// 1차 접근: 3중 for 문 > o(n^2)
// 2차 접근: 투포인터 https://velog.io/@onea/JS-%ED%88%AC-%ED%8F%AC%EC%9D%B8%ED%84%B0%EB%8B%A4%EC%A4%91-%ED%8F%AC%EC%9D%B8%ED%84%B0-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%8C%A8%ED%84%B4

const solution = numArr => {
    let count = 0;
    for (let i = 0; i < numArr.length; i++) {
        for (let j = i + 1; j < numArr.length; j++) {
            for (let k = j + 1; k < numArr.length; k++) {
                if (numArr[i] + numArr[j] + numArr[k] === 0) count++;
            }
        }
    }
    return count;
};


const result = solution([ -2, 3, 0, 2, -5 ]);
console.log("result:: ", result);
