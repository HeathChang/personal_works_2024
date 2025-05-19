// 벚꽃맛 쿠키는 소풍 가는 것을 참 좋아합니다. 소풍에 가면 친구들과 홍차를 마시고 젤리를 나누어 먹 으며 수다를 떨며 놀곤 합니다. 그래서 소풍을 갈 때마다 젤리를 쉽게 가져갈 수 있도록 주머니에 미리 나누어 담아둡니다. 벚꽃맛 쿠키는 젤리에 대해서는 까다로운 입맛을 가지고 있어서, 다섯 가지 종류 의 젤리만을 준비해놓습니다.
// 어느 날, 언제나와 같이 소풍을 가려고 준비하던 벚꽃맛 쿠키는, 소풍에 여느 때보다 많은 친구들이 참 석하게 된다는 것을 알게 되었습니다. 그래서 최대한 많은 젤리 주머니 를 가져가고 싶었던 동시에, 모 든 주머니의 젤리를 꺼내서 모았을 때, 어떤 한 가지 맛의 젤리를 다른 젤리의 개수를 모두 합친 것보다 많이 가져가고 싶어졌습니다.
// 벚꽃맛 쿠키는 젤리 주머니를 담아가야 했기 때문에, 얼마나 많은 젤리 주머니를 가져가야할지 문득 궁금해졌습니다. 여러분이 벚꽃맛 쿠키를 도와주세요!

const solution = (pouches) => {
	const jellyArray = ['a', 'b', 'c', 'd', 'e'];
	let returnCount = 0;

	for (let i = 0; i < jellyArray.length; i++) {
        const target = jellyArray[i];
        const distributionArr = [];

		for (let j = 0; j < pouches.length; j++) {
            const pouch = pouches[j];
            const countMap = new Map();
            for(let k = 0 ; k < pouch.length; k++){
                countMap.set(pouch[k],(countMap.get(pouch[k])|| 0) + 1);
            }
            const total = pouch.length;
            const targetCount = countMap.get(target) || 0;
            const otherCount = total - targetCount;
            distributionArr.push(targetCount - otherCount);
		}
        distributionArr.sort((a, b) => b - a);

        let sum = 0;
        let count = 0;
        for (let l = 0; l < distributionArr.length; l++) {
            sum += distributionArr[l];
            if(sum <= 0) break;
            count++;
        }
        if (count > returnCount) returnCount = count;
    }
    return returnCount;
};

console.log("result:: ", solution(["cab", "adaaa", "e"])); // 3
console.log("result:: ", solution(["aabb", "baba"])); // 0
console.log("result:: ", solution(["d", "a", "e", "d", "abdcc"])); // 3
