// URL > https://leetcode.com/problems/subarray-sum-equals-k/description/

const solution = (nums, k) => {
	// FIRST ATTEMPT:: ON^2
	// let returnCount = 0;
	// for (let i = 0; i < nums.length; i++) {
	// 	let sum = 0;
	// 	for (let j = i; j < nums.length; j++) {
	// 		sum += nums[j];
	// 		if(sum === k) returnCount++;
	// 	}
	// }
	// return returnCount;

	// SECOND ATTEMPT: ON >
	// 현재까지의 합(totalSum)에서 k를 뺐을 때 그 값이 과거에 나온 적이 있으면, 그 과거 지점부터 지금까지의 합이 k인 구간이 있다는 뜻이므로, 그 개수만큼 카운트하자
	let totalSum = 0;
	let returnCount = 0;
	const sumMap = new Map();
	sumMap.set(0, 1);

	for (let i = 0; i < nums.length; i++) {
		totalSum += nums[i];
		if (sumMap.has(totalSum - k)) {
			returnCount += sumMap.get(totalSum - k);
		}
		sumMap.set(totalSum, ( sumMap.get(totalSum) || 0 ) + 1);
	}
	return returnCount;
};

// console.log("result:: ", solution([1, 1, 1], 2)); // 2
// console.log("result:: ", solution([1, 2, 3], 3)); // 2
// console.log("result:: ", solution([1, -1, 0], 0)); // 3
console.log("result:: ", solution([1,2,1,2], 3)); // 3