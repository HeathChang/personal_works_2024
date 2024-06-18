// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12953

const solution = (arr) => {
    // GCD (Greatest Common Divisor): 최대공약수
    // while (b !== 0): b가 0이 될 때까지 반복합니다. 유클리드 알고리즘에 따라, b가 0이 되면 a가 최대공약수입니다.
    // const temp = b: b의 값을 임시 변수 temp에 저장합니다.
    // b = a % b: a를 b로 나눈 나머지를 b에 저장합니다.
    // a = temp: 이전의 b 값을 a에 저장합니다.
    // 반복이 끝나면, a가 최대공약수이므로 이를 반환합니다.
    const  gcd = (a, b) =>  {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    //LCM (Least Common Multiple): 최소공배수
    // (a * b) / gcd(a, b): 두 수 a와 b의 곱을 a와 b의 최대공약수로 나눕니다. 이렇게 하면 두 수의 최소공배수를 얻을 수 있습니다.
    const lcm = (a, b) => {
        return (a * b) / gcd(a, b);
    }


    // arr.reduce((acc, num) => lcm(acc, num), 1): 배열의 모든 요소에 대해 reduce 메서드를 사용하여 최소공배수를 계산합니다. 초기값을 1로 설정합니다.
    // (acc, num) => lcm(acc, num): reduce 메서드는 배열의 각 요소를 순회하면서 acc와 num에 대해 lcm 함수를 호출합니다.
    // acc는 누적된 최소공배수를 저장합니다.
    // num은 현재 배열 요소입니다.
    // reduce 메서드가 끝나면, 모든 배열 요소의 최소공배수가 acc에 저장되고, 이를 반환합니다.
    return arr.reduce((acc, num) => lcm(acc, num), 1);

};

console.log("result:: ", solution([2, 6, 8, 14])); // 168
// console.log("result:: ", solution([1,2,3)); // 6

