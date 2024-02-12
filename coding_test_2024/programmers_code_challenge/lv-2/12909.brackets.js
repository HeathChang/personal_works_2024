// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12909

const solution = (s) => {
    let right = 0;
    const arr = s.split("");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "(") right++;
        else if (arr[i] === ")") right--;
        if (right < 0) return false;
        if (i === arr.length - 1) return right === 0;
    }
};


// MARK: Refactored > split("")을 사용하지 않고, for of 로 가능
const solution = (s) => {
    let balance = 0;
    for (const char of s) {
        if (char === "(") balance++;
        else if (char === ")") balance--;
        if (balance < 0) return false;
    }
    return balance === 0;
};

const result = solution("()()");
console.log("result:: ", result);
