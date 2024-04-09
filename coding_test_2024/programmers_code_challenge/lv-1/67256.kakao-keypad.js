// URL > https://school.programmers.co.kr/learn/courses/30/lessons/67256

const solution = (numbers, hand) => {
    /**
     * 조건 1. 손은 상하좌우, 1칸씩 이동 가능
     * 조건 2. [1 , 4 , 7] 은 왼손으로만 & [3 ,6, 9] 는 오른손으로만 입력 가능
     * 조건 3. [2 , 5 , 8 , 0 ]은 키패드에 더 가까운 손으로 입력
     * 조건 4. [2 , 5 , 8 , 0 ]을 입력할때 거리가 같으면, 오른손잡이는 오른손으로, 왼손잡이는 왼손 사용
     */

    const keypadArr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ "*", 0, "#" ] ];
    const keypadByGaro = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ "*", 0, "#" ] ];
    const keypadBySero = [ [ 1, 4, 7, "*" ], [ 2, 5, 8, 0 ], [ 3, 6, 9, "#" ] ];
    // const keypadArr = [[1,4,7],[2,5,8,0],[3,6,9]]
    const height = keypadArr.length;
    let currentLeftPosition = keypadArr[height - 1][0]; // #
    let currentRightPosition = keypadArr[height - 1][2]; // *
    let result = "";

    for (let i = 0; i < numbers.length; i++) {
        // currentLeftPosition =
        if ([ 1, 4, 7 ].includes(numbers[i])) {
            result += "L";
            currentLeftPosition = i;
        } else if ([ 3, 6, 9 ].includes(numbers[i])) {
            result += "R";
            currentRightPosition = i;
        } else {
            for (let i = 0; i < keypadArr.length; i++) {
                for (let j = 0; j < keypadArr[i].length; j++) {
                    console.log(i, j, keypadArr[i][j]);
                }
            }


        } // end else

    }
    console.log(1, result);


    return result;
};

console.log("result:: ", solution([ 1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5 ], "right")); //"LRLLLRLLRRL"
// console.log("result:: ", solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); // "LRLLRRLLLRR"
// console.log("result:: ", solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); //"LLRLLRLLRL"