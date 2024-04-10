// URL > https://school.programmers.co.kr/learn/courses/30/lessons/67256

const solution = (numbers, hand) => {
    /**
     * 조건 1. 손은 상하좌우 (대각선 불가 - 유클리드 > 맨하튼), 1칸씩 이동 가능
     * 조건 2. [1 , 4 , 7] 은 왼손으로만 & [3 ,6, 9] 는 오른손으로만 입력 가능
     * 조건 3. [2 , 5 , 8 , 0 ]은 키패드에 더 가까운 손으로 입력
     * 조건 4. [2 , 5 , 8 , 0 ]을 입력할때 거리가 같으면, 오른손잡이는 오른손으로, 왼손잡이는 왼손 사용
     */

    const keypadArr = [
        [1, 4, 7, "*"],
        [2, 5, 8, 0],
        [3, 6, 9, "#"]
    ];
    let currentLeftPosition = [0, 3]; // 왼손의 초기 위치 '*'
    let currentRightPosition = [2, 3]; // 오른손의 초기 위치 '#'
    let result = "";

    const fnGetDistance = (x1, y1, x2, y2) => {
        // 두 위치 사이의 맨하튼 거리를 계산하여 반환
        return Math.abs(x2 - x1) + Math.abs(y2 - y1);
    };

    for (let i = 0; i < numbers.length; i++) {
        if ([1, 4, 7].includes(numbers[i])) {
            // 왼손으로 입력해야 하는 경우
            const temp = [1, 4, 7].indexOf(numbers[i]);
            result += "L";
            currentLeftPosition = [0, temp]; // 왼손의 위치 업데이트
        } else if ([3, 6, 9].includes(numbers[i])) {
            // 오른손으로 입력해야 하는 경우
            const temp = [3, 6, 9].indexOf(numbers[i]);
            result += "R";
            currentRightPosition = [2, temp]; // 오른손의 위치 업데이트
        } else {
            // 가운데 키패드 숫자인 경우
            for (let j = 0; j < keypadArr.length; j++) {
                for (let k = 0; k < keypadArr[j].length; k++) {
                    if (numbers[i] === keypadArr[j][k]) {
                        // 입력하려는 숫자의 위치를 찾았을 때
                        const right = fnGetDistance(j, k, currentRightPosition[0], currentRightPosition[1]); // 오른손과의 거리 계산
                        const left = fnGetDistance(j, k, currentLeftPosition[0], currentLeftPosition[1]); // 왼손과의 거리 계산

                        if (right > left) {
                            // 왼손이 더 가까운 경우
                            result += "L";
                            currentLeftPosition = [j, k]; // 왼손의 위치 업데이트
                        } else if (left > right) {
                            // 오른손이 더 가까운 경우
                            result += "R";
                            currentRightPosition = [j, k]; // 오른손의 위치 업데이트
                        } else {
                            // 거리가 같은 경우
                            if (hand === "right") {
                                // 오른손잡이인 경우
                                result += "R";
                                currentRightPosition = [j, k]; // 오른손의 위치 업데이트
                            } else {
                                // 왼손잡이인 경우
                                result += "L";
                                currentLeftPosition = [j, k]; // 왼손의 위치 업데이트
                            }
                        }
                        break; // 입력한 숫자 처리 후 반복문 종료
                    }
                }
            }
        }
    }
    return result; // 최종 결과 반환
};


// console.log("result:: ", solution([ 1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5 ], "right")); //"LRLLLRLLRRL"
// console.log("result:: ", solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); // "LRLLRRLLLRR"
// console.log("result:: ", solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); //"LLRLLRLLRL"
console.log("result:: ", solution([ 0, 0 ], "right")); // "RR"
