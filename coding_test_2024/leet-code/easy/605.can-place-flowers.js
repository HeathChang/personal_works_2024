// URL >

const solution = (flowerbed, n) => {
    let count = 0; // 심을 수 있는 꽃의 개수

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            let emptyLeft = (i === 0 || flowerbed[i - 1] === 0); // 왼쪽이 비어있는지 확인
            let emptyRight = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0); // 오른쪽이 비어있는지 확인

            if (emptyLeft && emptyRight) {
                flowerbed[i] = 1; // 꽃 심기
                count++;

                if (count >= n) {
                    return true; // 필요한 개수만큼 심었으면 true 반환
                }
            }
        }
    }

    return count >= n; // 심을 수 있는 꽃 개수가 충분하면 true, 아니면 false
};

console.log("result:: ", solution([1,0,0,0,1], 1));
console.log("result:: ", solution([1,0,0,0,1], 2));