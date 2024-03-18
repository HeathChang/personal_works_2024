// URL > https://school.programmers.co.kr/learn/courses/30/lessons/160586
const solution = (keymap, targets) => {
    let answer = [];
    targets.forEach(target => {
        let result = 0;
        target.split("").forEach(char => {
            let min = Infinity;
            for (let i = 0; i < keymap.length; i++) {
                let index = keymap[i].indexOf(char);
                if (index > -1) {
                    min = Math.min(min, index + 1);
                }
            }
            result += min;
        });
        answer.push(result);
    });
    answer = answer.map(e => {
        if (e == Infinity) {
            e = -1;
        }
        return e;
    });
    return answer;
};

console.log("result:: ", solution([ "ABACD", "BCEFD" ], [ "ABCD", "AABB" ])); // [9, 4]
console.log("result:: ", solution([ "AA" ], [ "B" ])); // [-1]
console.log("result:: ", solution([ "AGZ", "BSSS" ], [ "ASA", "BGZ" ])); // [4,6]
