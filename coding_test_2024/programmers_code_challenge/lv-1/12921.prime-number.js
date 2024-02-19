// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12921

const solution = (n) => {
    // 주어진 수가 2 미만이면 소수가 없으므로 0 반환
    if (n < 2) return 0;

    // 소수 판별을 위한 배열 생성 및 초기화 >
    // 소수를 판별하기 위한 배열을 생성하고, 모든 수를 일단 소수로 가정하여 true로 초기화합니다. 그러나 0과 1은 소수가 아니므로 false로 값을 변경합니다.
    let primes = new Array(n + 1).fill(true);
    // console.log(1, primes) //  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    primes[0] = primes[1] = false; // 0과 1은 소수가 아니므로 false로 초기화

    // 에라토스테네스의 체 알고리즘을 사용하여 소수 찾기
    // 에라토스테네스의 체 알고리즘을 사용하여 소수를 찾습니다. 먼저 2부터 시작하여 해당 수가 소수인 경우,
    // 그의 배수들을 모두 소수가 아니라고 표시합니다. 이는 소수의 배수들을 걸러내는 것으로, 비효율적인 반복을 줄여줍니다.

    // n의 제곱근 사용 이유: 만약 어떤 수 n이 sqrt(n)보다 큰 약수를 가진다면, 그러한 약수는 sqrt(n)보다 작은 수의 곱으로 이미 나타낼 수 있습니다
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (primes[i]) {
            // 현재 숫자가 소수인 경우, 그의 배수들을 모두 소수가 아니라고 표시
            for (let j = i * i; j <= n; j += i) {
                console.log(`i is ${i}`)
                console.log(`j is ${j}`) // 현재 값
                console.log(`next is ${j += i}`) // 2의 배수
                primes[j] = false;
            }
        }
    }

    // 소수인 수의 개수 카운트
    // 소수인 수의 개수를 세기 위해 primes 배열에서 true로 남아있는 수들의 개수를 세어줍니다.
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (primes[i]) count++;
    }

    return count;

};

console.log("result:: ", solution(14));
// console.log("result:: ", solution(5));
