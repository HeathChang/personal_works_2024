// URL > https://school.programmers.co.kr/learn/courses/30/lessons/17682

const solution = (dartResult) => {
    const split = dartResult.split("");
    const firstRound = "";
    const secondRound = "";
    const thirdRound = "";

    const isNumber = value => typeof value === "number" && !isNaN(value);
    let cound = 1;

    for(let i = split.length - 1 ; i >= 0; i--){
        if(isNumber(split[i])){
            // 숫자인 경우
            // 계산?
        } else {
            if(split[i] === "T"){}
            // else if(){}
            // else if(){}

        }
    }


};

console.log("result:: ", solution("1S2D*3T")); //37
// console.log("result:: ", solution("1D2S#10S")); //9
// console.log("result:: ", solution("1D2S0T")); //3
// console.log("result:: ", solution("1S*2T*3S")); //23
// console.log("result:: ", solution("1D#2S*3S")); //5
// console.log("result:: ", solution("1T2D3D#")); // -4
// console.log("result:: ", solution("1D2S3T*")); //59
