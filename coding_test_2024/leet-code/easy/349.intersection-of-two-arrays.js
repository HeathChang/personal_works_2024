// URL > https://leetcode.com/problems/intersection-of-two-arrays/description/

const solution = (nums1, nums2) => {
    // SECT: first attempt.
    // let newNums1 = [...new Set(nums1)];
    // let newNums2 = [...new Set(nums2)];
	// const shorter = Math.min(newNums1.length, newNums2.length) === newNums1.length ? newNums1 : newNums2;
	// const longer = Math.min(newNums1.length, newNums2.length) !== newNums1.length ? newNums1 : newNums2;
    // let returnSet = new Set();
    //
	// for (let i = 0; i < shorter.length; i++) {
    //     const a = longer.find(item => item === shorter[i]);
    //     if(a !== undefined && a !== null) {
    //         returnSet.add(a)
    //     }
	// }
    //
    // return [...returnSet];

    // SECT: second attempt
    if (nums1.length > nums2.length) return solution(nums2, nums1);

    let set1 = new Set(nums1);
    let result = new Set();

    for (let num of nums2) {
        if (set1.has(num)) {
            result.add(num);
        }
    }

    return [...result];
};

console.log("result:: ", solution([1, 2, 2, 1], [2, 2])); // [2]
console.log("result:: ", solution([4, 9, 5], [9, 4, 9, 8, 4]));
console.log("result:: ", solution([8,0,3], [0,0]));
