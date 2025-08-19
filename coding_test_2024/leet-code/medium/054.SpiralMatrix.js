// URL > https://leetcode.com/problems/spiral-matrix/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (matrix) => {
    if (matrix.length === 0) {
        return [];
    }

    const result = [];
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // 위쪽 행
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // 오른쪽 열
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // 아래쪽 행
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // 왼쪽 열
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
};

console.log("result:: ", solution([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ]));
