// question
// nums 의 길이 / 2 만큼 nums 에서 제거한다고 할때, 최소 제거 해야되는 숫자의 갯수를 구하시오

const solution = (nums) => {
	let n = Math.ceil(nums.length / 2);
	const numSet = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (numSet.has(nums[i])) numSet.set(nums[i], numSet.get(nums[i]) + 1);
		else numSet.set(nums[i], 1);
	}
	const a = [...numSet.values()].sort((a, b) => b - a);
	for (let i = 0; i < a.length; i++) {
		n -= a[i];
		if (n <= 0) return i + 1;
	}
};

console.log("result:: ", solution([7, 10, 1, 2, 7, 7, 1])); // 2
