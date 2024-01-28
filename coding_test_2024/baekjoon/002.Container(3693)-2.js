// URL > https://www.acmicpc.net/problem/11758
// 위에 쌓을때
const solution = (containerAmount) => {
    const containerLength = 40;
    const containerHeight = 8;
    const spaceBetweenColumn = 4;
    const spaceBetweenRows = 2;

    let bestArea = Number.MAX_SAFE_INTEGER;
    let bestLength = 0;
    let bestHeight = 0;

    const share = Math.ceil(containerAmount / 5);
    for (let a = 1; a <= share; a++) {
        let horCount = Math.ceil(share / a);
        let verCount = Math.ceil(share / horCount);

        const tempLength = ((containerLength * horCount + (horCount - 1) * spaceBetweenColumn) + 8);
        const tempHeight = ((containerHeight * verCount + (verCount - 1) * spaceBetweenRows) + 4);
        const tempArea = tempLength * tempHeight;

        if (tempArea < bestArea || (tempArea === bestArea && tempLength - tempHeight < bestLength - bestHeight)) {
            bestArea = tempArea;
            bestLength = tempLength;
            bestHeight = tempHeight;
        } // end if

    } //end for
    return `${bestLength} X ${bestHeight} = ${bestArea}`;
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