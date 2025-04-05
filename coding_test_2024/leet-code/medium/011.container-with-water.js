// URL > https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (height) => {
	if (height.length === 2) return Math.min(height[0], height[1]) ** 2;
	const heightLength = height.length;
	let left = 0;
	let right = heightLength - 1;
	let maxArea = 0;
	while (left < right) {
		let area = ( right - left ) * Math.min(height[right], height[left]);
		maxArea = Math.max(maxArea, area);
		if (height[left] < height[right]) left += 1;
		else right -= 1;
	}

	return maxArea;
};

console.log("result:: ", solution([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("result:: ", solution([1, 1]));