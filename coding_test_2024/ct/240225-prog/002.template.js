// URL >

const solution = (fees, usage) => {
    let answer = 0;
    let left = usage;
    let breakI = 0;

    for (let i = 0; i < fees.length; i++) {
        if (fees[i][0] === 0 || fees[i][0] > usage){
            breakI = i
            break;
        } else {
            if (i === 0) {
                left = usage - fees[i][0];
                answer += fees[i][0]* fees[i][2]
            } else {
                left = left - (fees[i][0] - fees[i - 1][0]);
                answer += (fees[i][0] - fees[i - 1][0]) * fees[i][2]
            }
        }
    }
    answer += left * fees[breakI][2] + fees[breakI][1]
    return answer
};

console.log("result:: ", solution([ [ 200, 910, 93 ], [ 400, 1600, 188 ], [ 655, 7300, 281 ], [ 0, 15372, 435 ] ], 320)); // 42760
console.log("result:: ", solution([ [ 200, 910, 93 ], [ 400, 1600, 188 ], [ 655, 7300, 281 ], [ 0, 15372, 435 ] ], 450)); //77550
console.log("result:: ", solution([ [ 1851, 1000, 100 ], [ 0, 2000, 155 ] ], 1205)); //121500
console.log("result:: ", solution([ [ 100, 415, 90 ], [ 250, 1600, 389 ], [ 0, 7000, 480 ] ], 530)); //208750
