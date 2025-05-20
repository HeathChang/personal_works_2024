// 문제:
// 현수의 아빠는 제과점을 운영합니다.
// 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
// 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면
// 12 15 11 20 25 10 20 19 13 15
// 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.
// 여러분이 현수를 도와주세요.

const solution = (N, K, sales) => {
	let maxSales = 0;
	let currentSales = 0;

	for (let i = 0; i < K; i++) {
		currentSales += sales[i];
	}
	// 첫 3일
	maxSales = currentSales;

    // 슬라이딩 윈도우의 왼쪽 포인터(left)는 i - K, 오른쪽 포인터(right)"는 i에 해당.
	for (let i = K; i < sales.length; i++) {
		currentSales = currentSales - sales[i - K] + sales[i];
		maxSales = Math.max(maxSales, currentSales);
	}

	return maxSales;
};

console.log("result:: ", solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15])); // 56
