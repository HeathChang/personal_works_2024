// URL > https://school.programmers.co.kr/learn/courses/30/lessons/42747

const solution = (citations) => {
    // 인용 횟수를 내림차순으로 정렬
    citations.sort((a, b) => b - a);

    // H-Index 계산
    for (let i = 0; i < citations.length; i++) {
        const h = citations[i];
        if (h >= i + 1) {
            // citations[i]가 h편 이상의 논문에서 h번 이상 인용된 경우
            // i+1은 현재까지의 논문의 수
            // h가 i+1 이상이므로 h는 유효한 H-Index 후보
            if (i === citations.length - 1 || citations[i + 1] <= i + 1) {
                return i + 1;
            }
        }
    }

    // 기본적으로 0이 리턴됨, 모든 논문이 0회의 경우
    return 0;
};

console.log("result:: ", solution([3, 0, 6, 1, 5])); // 3
