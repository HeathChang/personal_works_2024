// URL > https://school.programmers.co.kr/learn/courses/30/lessons/132265

const solution = (topping) => {
	// 방법 1. 시간초과
    // let result = 0;
	// for (let i = 0; i < topping.length; i++) {
    //     let mySet = new Set(topping.slice(0, i));
    //     let brotherSet = new Set(topping.slice(i));
    //     if(mySet.size === brotherSet.size) result += 1
	// }
    // return result;




};

console.log("result:: ", solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
console.log("result:: ", solution([1, 2, 3, 1, 4])); // 0

