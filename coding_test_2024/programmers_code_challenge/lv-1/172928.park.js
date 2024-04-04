// solution 함수 선언, park와 routes를 인자로 받음
const solution = (park, routes) => {
    // 주차장의 높이와 너비 계산
    let height = park.length;
    let width = park[0].length;
    let currentPosition = []; // 강아지의 현재 위치를 저장할 배열
    let tempPosition = []; // 임시 위치를 저장할 배열
    let parkArr= []; // 주차장의 배열을 저장할 배열

    // 주차장의 각 행을 순회하여 주차장 배열을 생성하고 강아지의 현재 위치를 찾음
    for(let i =0 ; i< park.length;i++){
        let split = park[i].split(""); // 주차장의 각 행을 문자열로 나눔
        parkArr = [...parkArr,split]; // 주차장 배열에 행 추가
        for(let j = 0 ; j < split.length; j++){
            if(split[j]==="S"){
                currentPosition = [i,j]; // 강아지의 현재 위치 저장
            }
        }
    }
    // 주어진 이동 경로(routes)에 따라 강아지를 이동시킴
    for(let i = 0; i < routes.length; i++){
        // 이동 방향과 거리를 구함
        let direction = routes[i].split("")[0];
        let moves = routes[i].split("")[2];
        let temp = [...currentPosition]; // 현재 위치를 임시로 저장
        let temp2 = [...currentPosition]; // 이동 가능한 위치를 임시로 저장

        // 주어진 이동 거리만큼 반복하여 강아지를 이동시킴
        for(let j = 0; j < moves ; j++){
            switch (direction) {
                case "N": // 북쪽으로 이동
                    temp[0] -= 1;
                    break;
                case "E": // 동쪽으로 이동
                    temp[1] += 1;
                    break;
                case "S": // 남쪽으로 이동
                    temp[0] += 1;
                    break;
                case "W": // 서쪽으로 이동
                    temp[1] -= 1;
                    break;
            }
            const x = temp[1];
            const y = temp[0];
            // 이동한 위치가 주차장 내에 있고 장애물이 없는지 확인
            let condition = x >= 0 && x < width && y >= 0 && y < height && parkArr[y][x] !== "X";
            if(condition){
                tempPosition = [...temp]; // 장애물이 없으면 이동 가능한 위치 저장
            } else {
                tempPosition = [...temp2]; // 장애물이 있으면 현재 위치로 설정하고 반복문 종료
                break;
            }
        }
        currentPosition = [...tempPosition]; // 이동한 위치를 현재 위치로 업데이트
    }
    return currentPosition; // 최종적으로 강아지의 위치 반환
};

// 테스트 출력
console.log("result:: ", solution([ "SOO", "OOO", "OOO" ], [ "E 2", "S 2", "W 1" ])); // [2,1]
console.log("result:: ", solution([ "SOO", "OXX", "OOO" ], [ "E 2", "S 2", "W 1" ])); // [0,1]
console.log("result:: ", solution([ "OSO", "OOO", "OXO", "OOO" ], [ "E 2", "S 3", "W 1" ])); // [0,0]
