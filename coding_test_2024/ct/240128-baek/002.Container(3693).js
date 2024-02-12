// URL > https://www.acmicpc.net/problem/11758
// 위에 쌓지않을때
const solution = (count) => {
    let bestArea = Number.MAX_SAFE_INTEGER;
    let bestWidth = 0;
    let bestHeight = 0;
    for (let a = 1; a <= 5; a++) {
        let horCount = Math.ceil(count / a); // 5
        let verCount = Math.ceil(count / horCount); // 5
        const w = ((40 * horCount + (horCount - 1) * 4) + 8);
        const h = ((8 * verCount) + (verCount - 1) * 2 + 4);
        const area = w * h
        if( area < bestArea || (area === bestArea && h - w < bestHeight - bestWidth))  {
            bestArea = area
            bestWidth = w
            bestHeight = h
        }
    }
    return `${bestWidth} X ${bestHeight} = ${bestArea}`
};

const question = "6\n" +
    "1\n" +
    "15\n" +
    "22\n" +
    "29\n" +
    "36\n" +
    "43";

const main = (question) => {
    const arr = question.split("\n");
    const resultArray = [];
    for (let i = 1; i < arr.length; i++) {
        resultArray.push(solution(+arr[i]));
    }
    return resultArray.join("\n");

};

const final = main(question);
console.log(final);