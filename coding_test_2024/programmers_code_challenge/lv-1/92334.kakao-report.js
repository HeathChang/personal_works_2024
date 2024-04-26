// URL > https://school.programmers.co.kr/learn/courses/30/lessons/92334
const solution = (id_list, report, k) => {
    let countMap = new Map(); // key: blockedUserId & value: reportCnt
    let reporteeMap = new Map(); // key: reporter & value: reporteeId
    let blockedMap = new Map(); // key: reporter & value: blocked id

    report.forEach((item, index) => {
        let split = item.split(" ");
        let reporter = split[0];
        let reportee = split[1];

        // countMap
        if(countMap.has(reporter)){
            countMap.set(reporter, countMap.get(reporter) + 1)
        } else {
            console.log(reporter)
            countMap.set(reporter, 1)
        }


        // reporteeMap


        // blockedMap
    })
    console.log(1, countMap)

    // if(blockedMap.has(reporter)){
    //     // 가지고있는 경우
    //
    // } else {
    //     // 가지고 있지 않은 경우
    //
    // }
    //
    //
    // if(reporteeMap.has(reporter)){
    //     // 가지고있는 경우
    //
    // } else {
    //     // 가지고 있지 않은 경우
    //
    // }
};

console.log("result:: ", solution([ "muzi", "frodo", "apeach", "neo" ], [ "muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi" ], 2));// [2,1,1,0]
// console.log("result:: ", solution([ "con", "ryan" ], [ "ryan con", "ryan con", "ryan con", "ryan con" ], 3));// [0,0]



