// quick-select

const solution = (nums, k) => {
	const quickSelect = (arr, left, right, kIndex) => {
		if (left === right) return arr[left];
		console.log('quickSelect:: ',  arr, left, right, kIndex)

		const pivotIndex = partition(arr, left, right);
		console.log(arr, pivotIndex, kIndex)
		if (pivotIndex === kIndex) {
			return arr[pivotIndex]; // 정답!
		} else if (pivotIndex > kIndex) {
			// 왼쪽에서 다시 찾기
			return quickSelect(arr, left, pivotIndex - 1, kIndex);
		} else {
			// 오른쪽에서 다시 찾기
			return quickSelect(arr, pivotIndex + 1, right, kIndex);
		}

	};

	const partition = (arr, left, right) => {
		const pivot = arr[right]; // 마지막 값을 피벗으로 선택
		console.log('pivot:: ', pivot, arr, left, right)
		let i = left; // 작은 값들이 모이는 구역

		for (let j = left; j < right; j++) {
			if (arr[j] > pivot) {
				[arr[i], arr[j]] = [arr[j], arr[i]]; // swap
				i++;
			}
		}

		[arr[i], arr[right]] = [arr[right], arr[i]];
		return i;
	};

	return quickSelect(nums, 0, nums.length - 1, k - 1);
};

console.log("result:: ", solution([3, 2, 1, 5, 6, 4], 2)); // 5