// URL > https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (height) => {
	if (height.length === 2) return Math.min(height[0], height[1]);
	let left = 0;
	let right = height.length - 1;
	let maxDistanceVolume = 0;

	while(left < right){
		let tempDistanceVolume = (right - left) * Math.min(height[right], height[left]);
		maxDistanceVolume = Math.max(maxDistanceVolume, tempDistanceVolume);
		if(height[left] < height[right]) left++;
		else right--;
	}

	return maxDistanceVolume;
};

console.log("result:: ", solution([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("result:: ", solution([1, 1]));