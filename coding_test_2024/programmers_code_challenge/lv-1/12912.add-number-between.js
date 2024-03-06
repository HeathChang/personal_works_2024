// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12912
const solution = (a,b) => {
    let answer = 0;
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    for(let i = min ; i <= max ; i++ ){
       answer += i
    }
    return answer;
};


console.log("result:: ", solution(3,5));
console.log("result:: ", solution(3,3));
console.log("result:: ", solution(5,3));
