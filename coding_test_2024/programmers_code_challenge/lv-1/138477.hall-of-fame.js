// URL > https://school.programmers.co.kr/learn/courses/30/lessons/138477?language=javascript

const solution = (k, score) => {
    const resultArr = [];
    return score.map((item , index)=> {
        resultArr.push(item);
        resultArr.sort((a,b) => b - a);
        if(resultArr.length > k ){
            resultArr.pop()
        }
        return resultArr[resultArr.length-1]
    })

    
}

console.log("result:: ", solution(3, [ 10, 100, 20, 150, 1, 100, 200 ]));
// console.log("result:: ", solution(4, [ 0, 300, 40, 300, 20, 70, 150, 50, 500, 1000 ]));

