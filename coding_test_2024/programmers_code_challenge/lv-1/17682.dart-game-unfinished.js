// URL > https://school.programmers.co.kr/learn/courses/30/lessons/17682

const solution = (dartResult) => {
    const split = dartResult.split("");
    for (let i = 0; i < split.length; i++) {
        if (typeof +split[i] === 'number' && isFinite(+split[i])) {
            
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
