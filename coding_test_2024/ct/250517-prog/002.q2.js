// 오늘도 평화로운 쿠키왕국. 블루베리 새는 쿠키들에게 선물을 배달하느라 여념이 없습니다. 쿠키들 앞으로 보내지는 선물들이 항상 많아 매일매일이 정신없는 블루베리 새. 블루베리 새는 선물을 배달 하는 중간에 또다른 선물을 픽업해서 배송하고자 합니다. 블루베리 새가 최대로 들 수 있는 선물의 개수가 정수 capacity 로, 배달 경로가 배열 routes 로 입력이 주어집니다. routes 의 각 요소는 [giftNum, from, to] 의 형태일 때, 블루베리 새가 모든 경로를 단방향으로 거쳐 배달할 수 있을까요?
// 예시 #1 capacity = 9, routes = [[3,2,6],[5,1,4],[1,7,13]]이라면 블루베리 새는 한번에 선물을 최대 9개까지 들 수 있으므로, 다음과 같이 배달합니다.

const solution = (capacity, routes) => {
	let tempArr = [];
	routes.forEach(item => {
		let [giftNum, from, to] = item;

		while (tempArr.length <= Math.max(from, to)) {
			tempArr.push(0);
		}

		tempArr[from] = tempArr[from]||0  + giftNum;
		tempArr[to] = tempArr[to]||0  -giftNum;
	});

	let tempBird = 0;
	for (let i = 0; i < tempArr.length; i++) {
		if (tempArr[i] === 0) continue;
		tempBird += tempArr[i];
		if (tempBird > capacity) return false;
	}
	return true;
};

console.log("result:: ", solution(9, [[3, 2, 6], [5, 1, 4], [1, 7, 13]])); // true
console.log("result:: ", solution(8, [[3, 12, 16], [8, 2, 12], [1, 14, 15]])); // true
console.log("result:: ", solution(20, [[5, 1, 15], [14, 3, 18], [3, 15, 21], [9, 14, 52]])); // false
