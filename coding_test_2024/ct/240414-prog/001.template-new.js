// URL >

const solution = (num_teams, remote_tasks, office_tasks, employees) => {
    let team = new Array(employees.length)
    let isOffice = new Array(employees.length)
    let teamExist = new Array(num_teams).fill(false)


    for( let i = 0; i < employees.length; i ++  ) {
        const splt = employees[i].split(" ")
        const dept = splt[0]
        const office = splt.filter((v,i) => i != 0)
            .map(v => office_tasks.includes(v))
            .reduce((p, n) => p || n, false)
        team[i] = dept
        isOffice[i] = office
    }

    let result = isOffice
        .map((v, i) => {
            if (!v) return i + 1
            else {
                teamExist[team[i] - 1] = true
                return -1;
            }
        })
        .filter(v => v != -1)
        .filter(v => {
            const teamGet = team[v - 1];
            const exist = teamExist[teamGet - 1]
            if( !exist ) {
                teamExist[teamGet - 1] = true
            }
            return exist
        })

    return result
}


console.log("result:: ", solution(3, [ "development", "marketing", "hometask" ], [ "recruitment", "education", "officetask" ], [ "1 development hometask", "1 recruitment marketing", "2 hometask", "2 development marketing hometask", "3 marketing", "3 officetask", "3 development" ])); // [1,4,5,7]
console.log("result:: ", solution(2, [ "design" ], [ "builiding", "supervise" ], [ "2 design", "1 supervise building design", "1 design", "2 design" ])); // [3,4]
