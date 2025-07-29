// 배열이 주어졌을 때, 각 원소에 대해 왼쪽에 위치한 자신보다 작은 값 중 가장 가까운 값의 인덱스를 구하라. 없으면 -1을 반환한다.

const nearestSmallerToLeft = (arr) => {
	const stack = [];
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		// 스택이 비어있지 않고, 현재 원소보다 크거나 같은 원소는 pop
		while (stack.length > 0 && stack[stack.length - 1].value >= arr[i]) {
			stack.pop();
		}

		// 스택이 비었으면 -1, 아니면 top의 인덱스
		if (stack.length === 0) {
			result.push(-1);
		} else {
			result.push(stack[stack.length - 1].index);
		}

		// 현재 원소와 인덱스를 스택에 push
		stack.push({ value: arr[i], index: i });
	}

	return result;
};

// 테스트
console.log(nearestSmallerToLeft([2, 1, 5, 6, 2, 3]));  // 출력: [-1, -1, 1, 2, 1, 4]