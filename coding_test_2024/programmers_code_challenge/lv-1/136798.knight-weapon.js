// URL > https://school.programmers.co.kr/learn/courses/30/lessons/136798

const solution = (number, limit, power) => {
    // isPrime 함수는 주어진 숫자가 소수인지 판별하는 함수
    const isPrime = (targetNumber) => {
        let count = 0;
        for(let i = 1; i <= Math.sqrt(targetNumber); i++) {
            // i는 1부터 targetNumber의 제곱근까지 증가하는 수
            console.log(i, targetNumber, Math.sqrt(targetNumber)); // 디버깅용 로그
            if(i === Math.sqrt(targetNumber)) {
                count += 1; // 제곱근이 정수인 경우 count 1 증가
            } else if(targetNumber % i == 0) {
                count += 2; // 약수가 발견될 때 count 2 증가 (약수의 짝을 계산하기 위해)
            }
        }
        return count; // 약수의 개수를 반환
    }

    let result = 0;

    for(let i = 1; i <= number; i++) {
        let temp = isPrime(i); // i가 소수인지 판별하여 약수의 개수를 얻음
        if(temp <= limit) {
            result += temp; // 약수의 개수가 limit 이하인 경우 result에 추가
        } else {
            result += power; // 약수의 개수가 limit 초과인 경우 power를 result에 추가
        }
    }

    return result; // 최종 결과 반환
};

console.log("result:: ", solution(5, 3, 2)); // 10
// console.log("result:: ", solution(10, 3, 2));  // 21

console.log("result:: ", solution(5, 3, 2)); // 10
// console.log("result:: ", solution(10, 3, 2));  // 21
