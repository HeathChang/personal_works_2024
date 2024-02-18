// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12915

const solution = (strings, n) => {
    return strings.sort((a, b) => {
        if (a[n] !== b[n]) {
            return a[n] > b[n] ? 1 : -1;
        }
        return a > b ? 1 : -1;
        // 1은 오름차순 정렬을 의미합니다. 즉, a가 b보다 큰 경우를 나타냅니다.
        // -1은 내림차순 정렬을 의미합니다. 즉, a가 b보다 작은 경우를 나타냅니다.
    });

    // let sortedStr = strings.sort();
    // return sortedStr.sort((a, b) => {
    //     return a[n].charCodeAt() - b[n].charCodeAt()
    // });
};

console.log(solution([ "sun", "bed", "car" ], 1));
console.log(solution([ "abce", "abcd", "cdx" ], 2));