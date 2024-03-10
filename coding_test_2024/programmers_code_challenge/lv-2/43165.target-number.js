// URL > https://school.programmers.co.kr/learn/courses/30/lessons/43165

const solution = (numbers, target) => {
    let answer = 0;
    numbers.unshift(0)
    fnCal(numbers[0], 1)

    function fnCal(sum, i){
        console.log(1, sum)
        console.log(2, i)
        if(i === numbers.length){
            if(sum === target) return 1;
            else  return 0;
        }

        fnCal(sum+numbers[i], i+1)
    }



    return answer;
};

console.log("result:: ", solution([ 1, 1, 1, 1, 1 ], 3)); // 5
// console.log("result:: ", solution([ 4, 1, 2, 1 ], 4)); // 2



