// question
// 배열에서 각 고유한 3개의 합이 0 이 되는 배열을 return 하는 합수

const solution = (nums) => {
	const returnArr = [];

	for (let i = 0; i < nums.length; i++) {
		for(let j =  i + 1 ;  j < nums.length; j++){
			if(j + 1 > nums.length) break;
			const sum = nums[i] + nums[j] + nums[j+1];
			if(sum === 0 ){
				returnArr.push([nums[i],nums[j],nums[j+1]])
			}
		}
	}
	return returnArr
};

console.log("result:: ", solution([1, 0, -1, 2, -2]));
