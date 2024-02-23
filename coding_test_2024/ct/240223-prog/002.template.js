// URL >

const solution = (k, m, names, amounts) => {
    let answer = 0;
    let tempArr = [];
    for (let i = 0; i < names.length; i++) {
        tempArr.push(names[i].toUpperCase());
        if (tempArr[i - 1] !== undefined && tempArr[i - 1] !== names[i].toUpperCase()) {
            tempArr = [];
        }
        if (tempArr.filter(item => item === names[i].toUpperCase()).length >= k || amounts[i] >= m) {
            answer += 1;
        }
    }
    return answer;

};

console.log("result:: ", solution(3, 50000, [ "msLEE", "jsKim", "jsKIM", "jsKiM", "jskim", "John", "john", "JOHN", "msLEE", "msLEE", "jsKim", "roy" ], [ 950, 52524, 1400, 6005, 10000, 4512, 512, 52000, 9000, 49000, 1400, 50000 ]));
console.log("result:: ", solution(2, 3451, [ "abcd", "aBCd", "jsKim", "rrr", "rrr" ], [ 950, 1000, 1400, 4000, 10000 ]));
