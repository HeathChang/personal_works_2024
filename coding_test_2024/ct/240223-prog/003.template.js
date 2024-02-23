// URL >

const solution = (arr1, arr2) => {
    const checkIfTrue = (s) => {
        let balance = 0;
        for (const char of s) {
            if (char === "(") balance++;
            else if (char === ")") balance--;
            if (balance < 0) return false;
        }
        return balance === 0;
    };

    let answer = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            answer += checkIfTrue(arr1[i].concat(arr2[j])) ? 1 : 0;
        }
    }
    return answer
};

console.log("result:: ", solution([ "()", "(()", ")()", "()" ], [ ")()", "()", "(()" ]));
