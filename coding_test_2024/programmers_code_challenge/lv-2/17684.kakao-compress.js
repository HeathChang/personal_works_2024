// URL > https://school.programmers.co.kr/learn/courses/30/lessons/17684

// const solution = (msg) => {
//     let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let tempArr = [];
//     let result = [];
//     let msgSplit = msg.split("")
//     for (let i = 0; i < alphabet.length; i++) {
//         tempArr.push(alphabet[i]);
//     }
//
//
//
//     return result;
// };


const solution = (msg) => {
    const dict = ['*', ...Array.from(Array(26), (_, i) => String.fromCharCode(65 + i))];
    const arr = [];

    let word = '';
    let wordIdxInDict = 0;
    for (let idx = 0; idx < msg.length; idx++) {
        word += msg[idx];
        console.log("current word::: ",idx, word)
        const tempWordIdxInDict = dict.indexOf(word);
        if (tempWordIdxInDict !== -1) {
            // 있는 경우
            wordIdxInDict = tempWordIdxInDict;
            console.log("next idx",word, wordIdxInDict)
        } else {
            // 없는 경우
            dict.push(word);
            arr.push(wordIdxInDict);
            console.log("reset word:: ", word)
            word = '';
            idx--; // 다시 시작
            console.log("restart current idx:: ", idx)
        }
    }
    return [...arr, wordIdxInDict];
}

console.log("result:: ", solution("KAKAO"));
// console.log("result:: ", solution("TOBEORNOTTOBEORTOBEORNOT")); //  [20, 15,  2,  5, 15, 18,14, 15, 20, 27, 29, 31,36, 30, 32, 34]
// console.log("result:: ", solution("ABABABABABABABAB")); // [1, 2, 27, 29, 28, 31, 30]
