// URL > https://school.programmers.co.kr/learn/courses/30/lessons/92335

const solution = (n, k) => {
    let answer = 0;
    const toArr = n.toString(k).split("0");
    const length = toArr.length
    const isPrime = (number) => {
        if (number < 2) return false;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    };

    for(let i = 0 ; i < toArr.length;i++){
        if(isPrime(+toArr[i])) answer++;
    }

    return answer;
};

console.log("result:: ", solution(437674, 3)); // 3
console.log("result:: ", solution(110011, 10)); // 2
