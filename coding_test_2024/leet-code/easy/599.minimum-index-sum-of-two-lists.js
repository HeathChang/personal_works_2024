// URL > https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/?envType=problem-list-v2&envId=string

const solution = (list1, list2) => {
    // First Attempt: SUCCESS,  O(n * m)
	// let returnArr = [];
	// let minCount = Number.MAX_SAFE_INTEGER;
	// for (let i = 0; i < list1.length; i++) {
	// 	for (let j = 0; j < list2.length; j++) {
    //         if(list1[i] !== list2[j]) continue;
    //         let sum = i + j;
    //         if(minCount >= sum){
    //             if(minCount > sum) returnArr = []
    //             minCount = sum
    //             returnArr.push(list1[i]);
    //         }
	// 	}
	// }
    // return returnArr;


    // Second Attempt:  O(n * m)
    // let returnArr = [];
    // let minCount = Number.MAX_SAFE_INTEGER;
    // for (let i = 0; i < list1.length; i++) {
    //     const j = list2.indexOf(list1[i])
    //     if(j === -1) continue;
    //     let sum = i + j;
    //     if(minCount >= sum){
    //         if(minCount > sum) returnArr = []
    //         minCount = sum
    //         returnArr.push(list1[i]);
    //     }
    // }
    // return returnArr;

    // Third Attempt
    const map = new Map();
    const result = [];
    let minSum = Number.MAX_SAFE_INTEGER;

    list2.forEach((word, idx) => map.set(word, idx));

    list1.forEach((word, i) => {
        if (map.has(word)) {
            const j = map.get(word);
            const sum = i + j;

            if (sum < minSum) {
                result.length = 0; // 기존 값 지우기
                result.push(word);
                minSum = sum;
            } else if (sum === minSum) {
                result.push(word);
            }
        }
    });

    return result;
};

console.log("result:: ", solution(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"]));
console.log("result:: ", solution(["happy", "sad", "good"], ["sad", "happy", "good"]));
