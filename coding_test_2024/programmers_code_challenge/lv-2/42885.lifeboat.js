// URL > https://school.programmers.co.kr/learn/courses/30/lessons/42885

// 1. 풀이 1.
const solution = (people, limit) => {
    let result = 0;
    people.sort((a, b) => b - a);
    for (let i = 0, j = people.length - 1; i <= j; i++) {
        if (people[i] + people[j] <= limit) {
            j--;
        }
        result++;

    }
    return result;
};

// 2. 풀이
// const solution = (people, limit) => {
//     people.sort((a, b) => a - b);
//     let result = 0;
//     let i = 0, j = people.length - 1;
//     while (i <= j) {
//         if (people[i] + people[j] <= limit) i++;
//         j--;
//         result++;
//     }
//     return result
// };
const result = solution([ 70, 50, 80, 50 ], 100);
console.log("result:: ", result);
