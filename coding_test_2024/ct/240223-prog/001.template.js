// URL >

const solution = (emails) => {
    let answer = 0;
    for (let email of emails) {
        const arr = email.split("@");
        if (arr.length !== 2) continue; // @가 두개인 경우
        else if (!/^[a-z.]+$/.test(arr[0])) continue; // 이름이 영어 소문자와 . 로 이뤄지지 않은 경우 ?? 길이 체크 ?
        else if (![ "com", "net", "org" ].includes(arr[1].split(".")[1])) continue;
        answer += 1;
    }
    return answer;
};

console.log("result:: ", solution([ "d@co@m.com", "a@abc.com", "b@def.com", "c@ghi.net" ]));
// console.log("result:: ", solution([ "d@co@m.com", "a@abc.com", "b@def.com", "c@ghi.net" ]));
