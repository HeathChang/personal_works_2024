// URL >

const solution = (number, limit, power) => {
    let ironWeight = 0; // 철의 무게를 저장할 변수

    // 1부터 number까지의 숫자를 순회하면서 약수의 개수를 세기
    for (let i = 1; i <= number; i++) {
        let divisorCount = 0; // 약수의 개수를 저장할 변수

        // 1부터 i까지의 숫자를 순회하면서 i의 약수의 개수를 세기
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisorCount++;
            }
        }

        // 제한수치를 초과한 경우 power로 설정
        if (divisorCount > limit) {
            divisorCount = power;
        }

        // 철의 무게 계산
        ironWeight += divisorCount;
    }

    return ironWeight;

};
console.log("result:: ", solution(5, 3, 2)); // 10
console.log("result:: ", solution(10, 3, 2));  // 21
