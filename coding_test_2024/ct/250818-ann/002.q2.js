// question
// 작점 (a, b)에서 목표점 (c, d)로 이동 가능한지 판단하는 함수

const solution = (obj1, obj2) => {
	// 타입이 다르면 바로 false
	if (typeof obj1 !== typeof obj2) return false;

	// 원시값은 === 로 비교
	if (typeof obj1 !== "object" || obj1 === null || obj2 === null) {
		return obj1 === obj2;
	}

	// 객체일 경우
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);

	if (keys1.length !== keys2.length) return false;

	for (const key of keys1) {
		if (!keys2.includes(key)) return false;
		if (!solution(obj1[key], obj2[key])) return false;
	}

	return true;
};

console.log("result:: ", solution({x: 1, y: 2}, {x: 1, y: '2'})); // false
