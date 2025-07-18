// quick-select

const solution = (nums, k) => {
	const quickSelect = (arr, left, right, targetK) => {
		if (left === right) return arr[left];
		const pivotIndex = sort(arr, left, right);
		if (targetK === pivotIndex) return arr[pivotIndex]; else if (pivotIndex > targetK) {
			// 왼쪽 다시찾기
			return quickSelect(arr, 0, pivotIndex - 1, targetK);
		} else if (pivotIndex < targetK) {
			// 오른쪽에서 다시 찾기
			return quickSelect(arr, 0, pivotIndex + 1, targetK);
		}
	};

	const sort = (arr, left, right) => {
		let pivotValue = arr[right]; // 4 -> 6 -> 5
		let i = left;
		for (let j = left; j < right; j++) {
			if (arr[j] > pivotValue) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
				i++;
			}
		}
		[arr[i], arr[right]] = [arr[right], arr[i]];
		return i;
	};

	return quickSelect(nums, 0, nums.length - 1, k - 1);
};

console.log("result:: ", solution([3, 2, 1, 5, 6, 4], 2)); // 5