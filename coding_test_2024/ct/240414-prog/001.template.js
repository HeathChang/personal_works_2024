// URL >

const solution = (num_teams, remote_tasks, office_tasks, employees) => {
    let officeTeamMap = new Map();
    let tempMap = new Map()
    let resultTeam = [];

    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        let split = employee.split(" ");
        let isWork = false;
        let teamNo = split[0];
        for (let j = 1; j < split.length; j++) {
            if(office_tasks.includes(split[j])) isWork = true;
        }
        const condition = officeTeamMap.has(teamNo)
        if(!isWork){
            // 일하러 가지 않아도 되는 경우
            if(!condition){
                // 근데, team에 아무도 없으면 내가 가야됨
                officeTeamMap.set(teamNo, employee)
                tempMap.set(employee, i+1)
            } else {
                // 팀에 누군가 있는 경우, 안가도됨
                resultTeam.push(i+1)
            }
        } else {
            // 일하러 가는 상황
            if(condition){
                // 누군가 회사에 출근한 경우, 누구가 원래 회사 출근해야되는지 체크
                const previousEmployee =  officeTeamMap.get(teamNo)
                let returnHome = true;
                for (let k = 1; k < previousEmployee.split(" ").length; k++) {
                    if(office_tasks.includes(previousEmployee[k])) {
                        returnHome = false;
                        break;
                    }
                }
                if(returnHome){
                    // 기존 워커는 집에 가기
                    officeTeamMap.delete(teamNo);
                    resultTeam.push(tempMap.get(previousEmployee));
                }
            }
            officeTeamMap.set(teamNo, employee)
            tempMap.set(employee, i+1)
        }

    }
    return resultTeam;
};


console.log("result:: ", solution(3, [ "development", "marketing", "hometask" ], [ "recruitment", "education", "officetask" ], [ "1 development hometask", "1 recruitment marketing", "2 hometask", "2 development marketing hometask", "3 marketing", "3 officetask", "3 development" ])); // [1,4,5,7]
console.log("result:: ", solution(2, [ "design" ], [ "builiding", "supervise" ], [ "2 design", "1 supervise building design", "1 design", "2 design" ])); // [3,4]
