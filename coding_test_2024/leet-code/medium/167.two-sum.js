// URL > https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/?envType=study-plan-v2&envId=top-interview-150

const solution = (numbers, target) => {
	// for(let i = 0 ; i < numbers.length; i++){
    //     let condition = numbers.lastIndexOf(target - numbers[i])
    //     if(condition !== -1 && i !== condition){
    //         numbers[0] = i + 1;
    //         numbers[1] = condition + 1;
    //         numbers.splice(2)
    //         break;
    //     }
    // }
    // return numbers;

    let left = 0;
    let right = numbers.length - 1;
    while(left < right){
        const sum = numbers[left] + numbers[right];
        if(sum === target){
            return [left + 1, right + 1]
        } else if (sum > target) {
            right-=1;
        } else if (sum < target){
            left+=1
        }
    }

};

console.log("result:: ", solution([2, 7, 11, 15], 9)); // [1,2]
// console.log("result:: ", solution([2, 3, 4], 6)); // [1,3]
// console.log("result:: ", solution([-1, 0], -1)); // [1,2]
// console.log("result:: ", solution([0,0,3,4], 0)); // [1,2]
