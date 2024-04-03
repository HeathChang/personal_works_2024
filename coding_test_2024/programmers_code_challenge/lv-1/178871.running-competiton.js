// URL > https://school.programmers.co.kr/learn/courses/30/lessons/178871

const solution = (players, callings) => {
    const keyPlayers = {}
    const keyRanks = {}
    players.forEach((player,idx)=>{
        const rank = idx+1
        keyPlayers[player] = rank
        keyRanks[rank] = player
    })
    callings.forEach(calling => {
        const losePlayer = keyRanks[keyPlayers[calling]-1]
        keyRanks[keyPlayers[calling]] = losePlayer
        keyRanks[keyPlayers[losePlayer]] = calling

        console.log(losePlayer, keyPlayers[losePlayer], calling, keyPlayers[calling])
        keyPlayers[calling] -= 1
        keyPlayers[losePlayer] += 1
    })
    return Object.values(keyRanks)

};

console.log("result:: ", solution([ "mumu", "soe", "poe", "kai", "mine" ], [ "kai", "kai", "mine", "mine" ])); // ["mumu", "kai", "mine", "soe", "poe"]
