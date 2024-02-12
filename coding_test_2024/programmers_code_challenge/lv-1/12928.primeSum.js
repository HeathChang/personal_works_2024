// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12928

const solution = (n) => {
    // 나의 풀이
    // let sum = 0;
    // for (let i = 1; i <= n; i++) {
    //     if (n % i === 0) sum += i;
    // }
    // return sum

    let sum = 1 + n; // 1 and n are always divisors (assuming n > 1)
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // n의 약수들은 제곱근을 기준으로 짝을 이룸
        // 예를 들어, n이 36일 때, 1과 36, 2와 18, 3과 12, 4와 9, 6과 6처럼 짝을 이룸
        // 여기서 볼 수 있듯이, 6 이후의 숫자들은 이미 앞서 계산된 약수들의 짝입니다.
        // 따라서 n의 제곱근까지만 반복하면서, 각 약수를 찾았을 때 그 약수와 n을 그 약수로 나눈 몫(=짝이 되는 약수)도 합에 추가합니다.
        if (n % i === 0) {
            sum += i;
            let complement = n / i;
            if (complement !== i) { // Avoid adding the square root twice if n is a perfect square
                sum += complement;
            }
        }
    }
    return sum;
};

const result = solution(12);
console.log("result:: ", result);
///

/**
 * ```

 * ```
 * */