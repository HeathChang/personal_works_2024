// URL > https://school.programmers.co.kr/learn/courses/30/lessons/64061

const solution = (board, moves) => {
    const N = board.length;
    let newArr = [];
    let result = [];
    let count = 0
    let flag = true;
    for(let i = 0; i < N ; i++ ){
        newArr[i] = new Array(N).fill(-1)
    }

    for (let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++){
            newArr[j][i]=board[i][j]
        }
    }    for(let i = 0 ; i < moves.length;i++){
        for(let j = 0 ; j < moves.length; j++){
            if(newArr[moves[i]-1][j] === 0) {
                continue;
            }
            const value = newArr[moves[i]-1][j]
            if(value){
                result.push(value)
            }
            newArr[moves[i]-1][j] = 0
            break;
        }
    }
    const deleteDuplicate = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                arr.splice(i, 2);
                i--;
                count += 1
            }
        }
        return arr
    }
    const checkDuplicate = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) return true
        }
        return false
    }

    while(checkDuplicate(result)){
        result = deleteDuplicate(result)
    }

    return count * 2
};

console.log("result:: ", solution([ [ 0, 0, 0, 0, 0 ], [ 0, 0, 1, 0, 3 ], [ 0, 2, 5, 0, 1 ], [ 4, 2, 4, 4, 2 ], [ 3, 5, 1, 3, 1 ] ], [ 1, 5, 3, 5, 1, 2, 1, 4 ]));
