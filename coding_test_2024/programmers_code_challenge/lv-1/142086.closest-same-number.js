// URL > https://school.programmers.co.kr/learn/courses/30/lessons/142086

const solution = (s) => {
    const lastSeen = []; // 각 문자의 마지막 위치를 저장하는 객체
    const result = []; // 결과 배열

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        // 현재 문자가 이전에 나타난 적이 있는 경우, 현재 인덱스와 마지막으로 나타난 인덱스의 차이를 계산
        if (lastSeen.hasOwnProperty(char)) {
            console.log(1, i , lastSeen[char])
            result.push(i - lastSeen[char]);
        } else {
            // 처음 나타나는 문자의 경우 -1 추가
            result.push(-1);
        }
        // 현재 문자의 마지막 위치를 현재 인덱스로 갱신
        lastSeen[char] = i;
    }

    return result;
};

const result = solution("banana"); // 	[-1, -1, -1, 2, 2, 2]
console.log("result:: ", result);
