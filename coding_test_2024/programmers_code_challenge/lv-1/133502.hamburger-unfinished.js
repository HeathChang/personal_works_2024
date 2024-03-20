// URL > https://school.programmers.co.kr/learn/courses/30/lessons/133502

const solution = (ingredient) => {
    let result = 0;
    
    for (let i = 0; i < ingredient.length - 3; i++) {
        if(ingredient[i] === 1){
            if(ingredient[i+1]===2){
                if(ingredient[i+2]===3){
                    if(ingredient[i+3]===1) result+=1
                }
            }
        }
    }
    return result
};

console.log("result:: ", solution([ 2, 1, 1, 2, 3, 1, 2, 3, 1 ])); //2
console.log("result:: ", solution([ 1, 3, 2, 1, 2, 1, 3, 1, 2 ])); //0
console.log("result:: ", solution([ 1, 2, 3, 1])); // 1
console.log("result:: ", solution([1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1])); // 3
