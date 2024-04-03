// URL >

const solution = (park, routes) => {
    let height = park.length;
    let width = park[0].length;
    let currentPosition = []
    let parkArr= []
    let result = [];



    // 강아지 현재 위치 찾기 및 방해물 찾기
    for(let i =0 ; i< park.length;i++){
        let split = park[i].split("")
        parkArr = [...parkArr,split]
        for(let j = 0 ; j < split.length; j++){
            if(split[j]==="S"){
                currentPosition = [i,j]
            }
        }
    }

    for(let i = 0; i < routes.length; i++){
        let direction = routes[i].split("")[0]
        let moves = routes[i].split("")[2]

        let temp = [...currentPosition]
        switch (direction) {
            case "N":
                temp[0] -= +moves
                break;
            case "E":
                temp[1] += +moves
                break;
            case "S":
                temp[0] += +moves
                break;
            case "W":
                temp[1] -= +moves
                break;
        }
        console.log(temp)
        const x = temp[0]
        const y = temp[1]
        let condition = x >= 0 && x <= width && y >= 0 && y <= height && parkArr[x][y] !== "X"

        // 1. 제한 사항, 움직이는 동안에 X 를 만나면 안됨

        console.log(1, x , y, width, height)
        if(condition){
            currentPosition = [...temp]
        }
    }

    result = [...currentPosition]





    return result;
};



// console.log("result:: ", solution([ "SOO", "OOO", "OOO" ], [ "E 2", "S 2", "W 1" ])); // [2,1]
console.log("result:: ", solution([ "SOO", "OXX", "OOO" ], [ "E 2", "S 2", "W 1" ])); // [0,1]
// console.log("result:: ", solution([ "OSO", "OOO", "OXO", "OOO" ], [ "E 2", "S 3", "W 1" ])); // [0,0]
