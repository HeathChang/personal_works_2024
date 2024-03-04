// URL >

const solution = (n, m, section) => {
    let result = 0;
    // let newArr = Array.from({length: n}, (_, i) => 1 + i);
    let newArr = new Array(n).fill(true);
    for (let i = 0; i < section.length; i++) {
        newArr[section[i] - 1] = false;
    }
    for (let i = 0; i < section.length; i++) {
        if (!newArr[section[i] - 1]) {
            for (let j = 0; j < m; j++) {
                newArr[section[i] - 1 + j] = true;
            }
            result += 1;
        }

    }
    return result;
};

console.log("result:: ", solution(8, 4, [ 2, 3, 6 ])); // 2
console.log("result:: ", solution(5, 4, [ 1, 3 ])); // 1
console.log("result:: ", solution(4, 1, [ 1, 2, 3, 4 ])); // 4
console.log("result:: ", solution(1, 1, [ 1 ])); // 1
console.log("result:: ", solution(10, 3, [ 2, 4, 10 ])); //
