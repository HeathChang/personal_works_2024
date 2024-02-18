// URL >

function solution(n, arr) {
    if (arr.length < 2) return -1;
    let maxDiff = -1;
    const length = arr.length > n ? n : arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[i] > arr[j]) {
                let diff = arr[i] - arr[j];
                if (diff > maxDiff) {
                    maxDiff = diff;
                }
            }
        }
    }

    return maxDiff;
}

// 예제 실행
console.log(solution(10, [3,1,4,1,5,9,2,6,5,3])); // 7
console.log(solution(10, [1,2,3,4,5,6,7,8,9,10])); // -1
console.log(solution(6, [4,1,7,6,5,2])); // 5
