// URL > https://school.programmers.co.kr/learn/courses/30/lessons/178871

const solution = (players, callings) => {
    let result = [];

    let count = callings.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0)+1
        return acc
    }, {})

    for(let i = 0 ; i < players.length; i++ ){
        if(count[players[i]]){
            result.splice(i-count[players[i]], 0, players[i])
        } else {
            result[i]= players[i]
        }
    }
    return result;
};

console.log("result:: ", solution([ "mumu", "soe", "poe", "kai", "mine" ], [ "kai", "kai", "mine", "mine" ])); // ["mumu", "kai", "mine", "soe", "poe"]
