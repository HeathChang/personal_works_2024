// URL > https://school.programmers.co.kr/learn/courses/30/lessons/43165

const solution = (numbers, target) => {
    const fnRecursive = (sum, index) => {
        // 1. 종료조건
        if (index === numbers.length) {
            if (sum === target) return 1;
            else return 0;
        }
        // 2. 중간
        let result = 0;
        result += fnRecursive(sum + numbers[index] , index+1)
        result += fnRecursive(sum - numbers[index] , index+1)
        // 3. Return
        return result;
    };
    // let answer = fnRecursive(numbers[0], 1) + fnRecursive(-numbers[0],1);
    let answer = fnRecursive(0,0)
    return answer;
};

console.log("result:: ", solution([ 1, 1, 1, 1, 1 ], 3)); // 5
// console.log("result:: ", solution([ 4, 1, 2, 1 ], 4)); // 2



