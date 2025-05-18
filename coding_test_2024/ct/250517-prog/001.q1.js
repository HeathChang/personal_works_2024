// 오늘도 열심히 젤리를 먹고 있는 용감한 쿠키는 점프를 하다가 젤리를 가장 효율적으로 먹으면 편하 겠다는 생각을 하게 되었다.
//     젤리의 종류가 아래와 같이 있다고 할 때, 용감한 쿠키는 지정된 점수를 달성하기 위해서 최소 몇 개의 젤리를 먹어야 할까?
//     젤리 이름	점수
// 무지개곰 젤리	100점
// 별 젤리	50점
// 노랑 곰젤리	5점
// 일반 젤리	1점
// 예시 1
// 156 점을 달성해야 하는 상황일 때, 100점 젤리 1개, 50점 젤리 1개, 5점 젤리 1개, 1점 젤리 1개로, 총 4개의 젤리로 주어진 점수를 최소 젤리로 달성할 수 있다 그러므로 return하는 값은 4입니다.

const solution = (score) => {
	const jellyBears = [100, 50, 5, 1];
	let returnCount = 0;

	for (let i = 0; i < jellyBears.length; i++) {
        if (score === 0) break;
        const temp = Math.floor(score/jellyBears[i]);
        returnCount += temp;
        score -= temp * jellyBears[i]
	}
    return returnCount;
};

console.log("result:: ", solution(156)); // 4
console.log("result:: ", solution(319)); // 10
