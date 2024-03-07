// URL > https://school.programmers.co.kr/learn/courses/30/lessons/42889

const solution = (N, stages) => {
    const result = [];
    const map = new Map();
    let newStages = [ ...stages ];
    for (let i = 1; i <= N; i++) {
        const bunmo = newStages.length;
        const bunja = newStages.filter(item => item === i);
        map.set(i, bunja.length / bunmo);
        newStages = newStages.filter(item => item !== i);
    }
    const newMap = [ ...map.entries() ].sort((a, b) => b[1] - a [1]);
    for (let i of newMap.entries()) {
        result.push(i[1][0]);
    }
    return result;
};

const refactoredSolution = (N, stages) => {
    // Refactor 한 녀석
    const result = [];
    const map = new Map();

    // stages 배열을 복제하여 새로운 배열을 생성
    let newStages = [ ...stages ];

    // 각 스테이지 별로 실패율 계산
    for (let i = 1; i <= N; i++) {
        const bunmo = newStages.length;
        const bunja = newStages.filter(item => item === i);
        map.set(i, bunja.length / bunmo);
        newStages = newStages.filter(item => item !== i);
    }

    // 실패율을 기준으로 내림차순 정렬된 Map 생성
    const sortedMap = new Map([ ...map.entries() ].sort((a, b) => b[1] - a[1]));

    // 정렬된 Map의 키(스테이지 번호)를 결과 배열에 추가
    for (const [ key, value ] of sortedMap) {
        result.push(key);
    }
    return result;
};


console.log("result:: ", solution(5, [ 2, 1, 2, 6, 2, 4, 3, 3 ]));//[3,4,2,1,5]
console.log("result:: ", solution(4, [ 4, 4, 4, 4, 4 ])); // [4,1,2,3]
console.log("result:: ", refactoredSolution(5, [ 2, 1, 2, 6, 2, 4, 3, 3 ]));//[3,4,2,1,5]
console.log("result:: ", refactoredSolution(4, [ 4, 4, 4, 4, 4 ])); // [4,1,2,3]


//
// 문제를 읽어보면 알 수 있듯이 이 문제는 정렬을 이용해서 풀 수 있습니다.
// 먼저 주어진 배열의 길이를 이용하여 전체 사용자 수를 구하고, stages 를 순회하며 각 스테이지에 몇 명의 사용자가 도달했는지 세줍니다. 이렇게 만들어둔 배열(각 스테이지별 사용자 수가 들어있는)을 순회하면서 stages 를 참고하여 스테이지별 실패율을 계산합니다. 이때, 스테이지에 도달한 사용자가 0명인 경우 예외 처리를 해야 합니다. 스테이지별 실패율을 구했다면, 각 스테이지 번호와 묶어서 실패율 내림차순으로 정렬합니다. 실패율이 같은 경우는 스테이지 번호가 작은 것을 먼저 오도록 정렬하면 됩니다.
// 