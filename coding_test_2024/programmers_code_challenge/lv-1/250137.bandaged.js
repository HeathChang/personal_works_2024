// URL > https://school.programmers.co.kr/learn/courses/30/lessons/250137

const solution = (bandage, health, attacks) => {
    // bandage[0] > 캐스팅 타임
    // bandage[1] > 초당 회복량
    // bandage[2] > 성공보너스
    // health > 초기 health
    // attacks.forEach(attack => attack[0] > 공격 타이밍 & attack[1] > 데미지
    // bandage 배열에서 각 값들을 변수에 할당합니다.
    let castingTime = bandage[0];
    let hps = bandage[1];
    let bonusHealth = bandage[2];
    let currentHealth = health; // 현재 체력을 초기 체력으로 설정합니다.

    // attacks 배열의 마지막 공격 타이밍을 구합니다.
    let finalAttackTiming = attacks[attacks.length - 1][0];
    let bondageTime = 0;

    // attacks 배열을 Map으로 변환하여 공격 타이밍과 데미지를 매핑합니다.
    let attackMap = new Map();
    attacks.forEach(item => {
        attackMap.set(item[0], item[1]);
    });

    // 반복문을 통해 시간에 따라 상태를 업데이트합니다.
    for (let i = 0; i <= finalAttackTiming; i++) {
        if (attackMap.has(i)) {
            // 현재 시간에 공격이 있는 경우
            bondageTime = 0;
            currentHealth -= attackMap.get(i); // 공격에 의한 데미지만큼 체력을 감소시킵니다.

            if (currentHealth <= 0) {
                // 체력이 0 이하로 떨어지면 -1을 반환하고 함수 종료합니다.
                return -1;
            }
        } else {
            // 현재 시간에 공격이 없는 경우
            if (i !== 0) bondageTime += 1; // 시작 시간이 아닌 경우 bondageTime을 증가시킵니다.

            if (currentHealth < health) {
                // 현재 체력이 초기 체력보다 작은 경우 회복 처리를 합니다.
                currentHealth += hps; // 초당 회복량만큼 체력을 회복시킵니다.

                if (bondageTime === castingTime) {
                    // 붕대 묶기 시간이 캐스팅 타임과 일치하는 경우
                    bondageTime = 0;
                    currentHealth += bonusHealth; // 보너스 체력을 추가로 회복시킵니다.
                }
            }

            if (currentHealth > health) currentHealth = health; // 현재 체력이 초기 체력을 초과하지 않도록 조정합니다.
        }
    }

    return currentHealth; // 최종 체력을 반환합니다.
};

// console.log("result:: ", solution([ 5, 1, 5 ], 30, [ [ 2, 10 ], [ 9, 15 ], [ 10, 5 ], [ 11, 5 ] ])); // 5
// console.log("result:: ", solution([3, 2, 7], 20, [[1, 15], [5, 16], [8, 6]])); // -1
// console.log("result:: ", solution([4, 2, 7], 20, [[1, 15], [5, 16], [8, 6]])); // -1
// console.log("result:: ", solution([1, 1, 1], 5, [[1, 2], [3, 2]])); // 3
console.log("result:: ", solution([ 1, 10, 10 ], 5, [ [ 97, 4 ], [ 99, 4 ] ])); // 1
