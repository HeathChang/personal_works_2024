// URL > https://school.programmers.co.kr/learn/courses/30/lessons/133502

const solution = (ingredient) => {
    let temp = [];
    let count = 0;
    for (let i = 0; i < ingredient.length; i++) {
        temp.push(ingredient[i]);
        if(temp.slice(-4).join('') === '1231'){
            count += 1;
            temp.splice(-4);
        }
    }
    return count;
};

console.log("result:: ", solution([ 2, 1, 1, 2, 3, 1, 2, 3, 1 ])); //2
// console.log("result:: ", solution([ 1, 3, 2, 1, 2, 1, 3, 1, 2 ])); //0
// console.log("result:: ", solution([ 1, 2, 3, 1 ])); // 1
// console.log("result:: ", solution([ 1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1 ])); // 3
