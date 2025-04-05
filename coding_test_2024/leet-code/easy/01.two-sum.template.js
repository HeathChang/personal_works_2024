// URL > https://leetcode.com/problems/two-sum/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (nums, target) => {
	// type 1.
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) return [i, j];
		}
	}

    // type 2.
	for (let i = 0; i < nums.length; i++) {
		const index = nums.indexOf(target - nums[i]);
		if (index === -1 || i === index) continue;
        else return [i, index]
	}

    // type 3.
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
};

console.log("result:: ", solution([2, 7, 11, 15], 9));
console.log("result:: ", solution([3, 2, 4], 6));