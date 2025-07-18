// URL > https://leetcode.com/problems/kth-largest-element-in-an-array/description/

const solution = (nums, k) => {
    const partialArr = [];
    for(let num of nums){
        partialArr.push(num);
        partialArr.sort((a,b) => b - a);
        if(partialArr.length > k) partialArr.pop()
    }
    return partialArr[k-1]
};

console.log("result:: ", solution([3, 2, 1, 5, 6, 4], 2)); // 5