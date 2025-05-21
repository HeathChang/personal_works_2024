// 부분집합(Subset) 구하기

const subsets = (nums) => {
	const result = [];

	const dfs = (index, path) => {
		// 현재 경로 저장
		result.push([...path]);

		// index부터 끝까지 반복
		for (let i = index; i < nums.length; i++) {
			path.push(nums[i]);      // 현재 숫자 선택
			dfs(i + 1, path);        // 다음 숫자 재귀 탐색
			path.pop();              // 백트래킹 (선택 취소)
		}
	};

	dfs(0, []);
	return result;
};

console.log(subsets([1, 2, 3]));