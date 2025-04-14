// URL > https://leetcode.com/problems/excel-sheet-column-title/


const solution = (columnNumber) => {
    let returnString = '';
    while (columnNumber > 0) {
        columnNumber-= 1;
        returnString = String.fromCharCode((columnNumber % 26) + 65) + returnString;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return returnString;
};

console.log("result:: ", solution(1));
console.log("result:: ", solution(28));
console.log("result:: ", solution(52));