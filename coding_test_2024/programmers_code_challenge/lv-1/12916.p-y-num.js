// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12916

const solution = (n) => {
    const arr = n.toLowerCase().split("").reduce((acc, value) => {
        // 객체에 현재 요소의 키가 존재하면 1을 더하고, 그렇지 않으면 새로운 키로 추가하고 값을 1로 설정합니다.
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    }, {});
    if (arr.p === arr.y || (arr.p === undefined && arr.y === undefined)) return true;
    else return false;
};

const result = solution("pyy");
console.log("result:: ", result);
