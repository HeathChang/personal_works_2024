// URL > https://school.programmers.co.kr/learn/courses/30/lessons/134240

const solution = (arr) => {
    // 내가 푼 코드
    // let result = "";
    // for (let i = 1; i < arr.length; i++) {
    //     const amount = Math.floor(arr[i] / 2).toString();
    //     for (let j = 0; j < amount; j++) {
    //         result+=i;
    //     }
    // }
    // return result +"0"+ result.split("").reverse().join("");
    //
    // 다른 사람이 푼 코드
    let res = '';
    for (let i = 1; i < arr.length; i++) {
        res += String(i).repeat(Math.floor(arr[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
};


console.log("result:: ", solution([ 1, 3, 4, 6 ]));
console.log("result:: ", solution([1, 7, 1, 2]));

