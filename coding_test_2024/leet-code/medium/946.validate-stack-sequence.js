// URL > https://leetcode.com/problems/validate-stack-sequences/

const solution = (pushed, popped) => {
    if(pushed.length !== popped.length ) return false;
    const testArray = [];

    while (pushed.length) {
        testArray.push(pushed.shift());
        while (testArray.length && testArray[testArray.length - 1] === popped[0]) {
            testArray.pop();
            popped.shift();
        }
    }
    return testArray.length === 0;
};

console.log("result:: ", solution([1, 0], [1, 0])); // true
console.log("result:: ", solution([0, 2, 1], [0, 1, 2])); // true
console.log("result:: ", solution([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])); // true
console.log("result:: ", solution([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])); // false