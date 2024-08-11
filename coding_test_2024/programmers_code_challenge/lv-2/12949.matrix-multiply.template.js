// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12949

const solution = (arr1, arr2) => {
    const rows1 = arr1.length;
    const cols1 = arr1[0].length;
    const rows2 = arr2.length;
    const cols2 = arr2[0].length;

    // 결과 행렬의 크기
    const result = Array.from({ length: rows1 }, () => Array(cols2).fill(0));

    // 행렬 곱셈 수행
    for (let i = 0; i < rows1; i++) {
        for (let j = 0; j < cols2; j++) {
            for (let k = 0; k < cols1; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return result;
};

console.log("result:: ", solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]])); // [[15, 15], [15, 15], [15, 15]]
console.log("result:: ", solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]])); // [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
