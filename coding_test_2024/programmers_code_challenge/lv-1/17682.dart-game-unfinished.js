// URL > https://school.programmers.co.kr/learn/courses/30/lessons/17682

const solution = (dartResult) => {
    let answer = 0;
    let tempArr = [];
    let pattern = /(\d+|\D)/g; // 숫자와 문자를 구분하는 정규 표현식
    let matchArr = dartResult.match(pattern); // 정규 표현식을 이용해 문자열을 분리하여 배열에 저장
    for (let i = 0; i < matchArr.length; i++) {
        console.log("current Item:: ", matchArr[i]);
        if (matchArr[i] == "S") {
            tempArr.push(matchArr[i - 1] ** 1);
        } else if (matchArr[i] == "D") {
            tempArr.push(matchArr[i - 1] ** 2);
        } else if (matchArr[i] == "T") {
            tempArr.push(matchArr[i - 1] ** 3);
        } else if (matchArr[i] == "*") {
            tempArr[tempArr.length - 1] *= 2;
            tempArr[tempArr.length - 2] *= 2;
        } else if (matchArr[i] == "#") {
            tempArr[tempArr.length - 1] = -tempArr[tempArr.length - 1];
        }
    }

    // 3)
    answer = tempArr.reduce((sum, e) => sum + e, 0);

    return answer;

};

console.log("result:: ", solution("1S2D*3T")); //37 > 11 * 2 + 22 * 2 + 33
// console.log("result:: ", solution("1D2S#10S")); //9
// console.log("result:: ", solution("1D2S0T")); //3
// console.log("result:: ", solution("1S*2T*3S")); //23
// console.log("result:: ", solution("1D#2S*3S")); //5
// console.log("result:: ", solution("1T2D3D#")); // -4
// console.log("result:: ", solution("1D2S3T*")); //59
