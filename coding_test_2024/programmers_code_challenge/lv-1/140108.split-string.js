// URL > https://school.programmers.co.kr/learn/courses/30/lessons/140108
const solution = (s) => {
    let count = 0;
    let first = s[0];
    let skipCount = 0;
    for (let i = 1; i <= s.length; ++i) {
        if (s[i] === undefined) {
            count += 1;
            break;
        }

        if (first === s[i]) {
            skipCount += 1;
        } else {
            if (skipCount === 0) {
                count += 1;
                first = s[i + 1];
                skipCount = 0;
                i++;
            } else {
                skipCount -= 1;
            }
        }
    }

    return count;
};

console.log("result:: ", solution("baaa")); // 2
// console.log("result:: ", solution("banana")); // 3
// console.log("result:: ", solution("abracadabra")); // 6
// console.log("result:: ", solution("aaabbaccccabba")); //3
//