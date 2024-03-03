// 1. photo[i]를 하나씩 임시통에 담아 비교
// 2. name[i]를 순회하면서 임시통에 해당 글자가 있는지 찾기
// 3. 있으면 더해주기
// 4. 다 더한 값 결과 배열에 넣기
// 5. 초기화
// 6. 다시 1부터 name 끝까지 반복

function solution(name, yearning, photo) {
    let answer = [];
    let sum = 0;
    let tempArr = "";

    for (let i = 0; i < photo.length; i++) {
        // 1)
        tempArr = photo[i];

        for (let i = 0; i < name.length; i++) {
            // 2)
            let found = tempArr.indexOf(name[i]);

            // 3)
            if (found !== -1) {
                sum += yearning[i];
            }
        }
        // 4)
        answer.push(sum);

        // 5. 초기화
        tempArr = "";
        sum = 0;
    }

    return answer;
}


console.log(solution([ "may", "kein", "kain", "radi" ], [ 5, 10, 1, 3 ],[[ "may" ], [ "kein", "deny", "may" ], [ "kon", "coni" ]]));