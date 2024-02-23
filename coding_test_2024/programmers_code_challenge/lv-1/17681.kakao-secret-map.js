// URL > https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
    let result = [];
    for (let i = 0; i < n; i++) {
        let newRow = (arr1[i] | arr2[i]).toString(2);
        console.log(1, newRow)
        while (newRow.length < n) {
            newRow = '0' + newRow;
        }
        newRow = newRow.replace(/1/g, '#').replace(/0/g, ' ');
        result.push(newRow);
    }
    return result;
}


// const solution = (n, arr1, arr2) => {
//     const toStringTwo = (arr) => {
//         return arr.map(num => {
//             const binaryString = num.toString(2);
//             return '0'.repeat(n - binaryString.length) + binaryString;
//         });
//     };
//
//     const binaryArr1 = toStringTwo(arr1);
//     const binaryArr2 = toStringTwo(arr2);
//
//     const returnArr = [];
//     for (let i = 0; i < n; i++) {
//         let combinedRow = '';
//         for (let j = 0; j < n; j++) {
//             const sum = parseInt(binaryArr1[i][j]) + parseInt(binaryArr2[i][j]);
//             combinedRow += sum >= 1 ? '#' : ' ';
//         }
//         returnArr.push(combinedRow);
//     }
//     return returnArr;
// };

console.log("result:: ", solution(5, [ 9, 20, 28, 18, 11 ], [ 30, 1, 21, 17, 28 ])); // ["#####","# # #", "### #", "# ##", "#####"]
console.log("result:: ", solution(6, [ 46, 33, 33, 22, 31, 50 ], [ 27, 56, 19, 14, 14, 10 ])); // ["#####","# # #", "### #", "# ##", "#####"]
