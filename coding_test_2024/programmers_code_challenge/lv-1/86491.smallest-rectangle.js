// URL > https://school.programmers.co.kr/learn/courses/30/lessons/86491

const solution = (sizes) => {
    //  내가 푼 코드
    let largest = 0;
    const arr = [];
    for (let i = 0; i < sizes.length; i++) {
        largest = largest < sizes[i][0] ? sizes[i][0] : largest < sizes[i][1] ? sizes[i][1] : largest;
        arr.push(Math.min(sizes[i][0], sizes[i][1]));
    }
    return largest * arr.reduce((acc, val) => acc > val ? acc : val, 0);

    //  참조한 코드
    // 각 명함을 [가로, 세로] 형태로 정규화하여 가로가 항상 세로보다 크거나 같도록 조정
    const normalizedSizes = sizes.map(([w, h]) => w >= h ? [w, h] : [h, w]);

    // 정규화된 명함 크기에서 가장 긴 가로와 세로 길이를 찾음
    const maxWidth = Math.max(...normalizedSizes.map(size => size[0]));
    const maxHeight = Math.max(...normalizedSizes.map(size => size[1]));

    // 가장 긴 가로와 세로 길이를 곱하여 지갑의 크기를 계산
    return maxWidth * maxHeight;
};

// const result = solution([ [ 60, 50 ], [ 30, 70 ], [ 60, 30 ], [ 80, 40 ] ]); // 4000
// const result = solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]); // 120
const result = solution([ [ 14, 4 ], [ 19, 6 ], [ 6, 16 ], [ 18, 7 ], [ 7, 11 ] ]); // 133

console.log("result:: ", result);
