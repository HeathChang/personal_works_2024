// URL > https://leetcode.com/problems/kth-largest-element-in-an-array/description/
// nums 배열에서 k 번째로 큰 숫자를 찾는 방법, 이때.sort()는 사용하지 아니한다.
const solution = (nums, k) => {
    // FIRST ATTEMPT :: TLE
    const partialArr = [];
    for(let num of nums){
        partialArr.push(num);
        partialArr.sort((a,b) => b - a);
        if(partialArr.length > k) partialArr.pop()
    }
    return partialArr[k-1];


    // SECOND ATTEMPT :: SUCCESS

};

console.log("result:: ", solution([3, 2, 1, 5, 6, 4], 2)); // 5