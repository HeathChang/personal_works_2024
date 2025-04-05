// URL > https://chatgpt.com/c/67d6e2f2-c464-8005-a204-ee62e155d108
const solution = (s) => {
    const stack = [];

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); // 여는 괄호는 스택에 넣는다.
        } else {
            if (stack.length === 0) return false; // 닫는 괄호가 먼저 나오면 잘못된 경우

            const last = stack.pop();
            if (
                (char === ')' && last !== '(') ||
                (char === '}' && last !== '{') ||
                (char === ']' && last !== '[')
            ) {
                return false; // 괄호 쌍이 맞지 않으면 false
            }
        }
    }

    return stack.length === 0; // 스택이 비어 있으면 올바른 괄호 문자열
};

console.log("result:: ", solution("()")); // true
console.log("result:: ", solution("()[]{}")); // true
console.log("result:: ", solution("(]")); // false
console.log("result:: ", solution("([)]")); // false
console.log("result:: ", solution("{[]}")); // true