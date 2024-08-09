// URL > https://school.programmers.co.kr/learn/courses/30/lessons/132265

const solution = (numbers) => {
    const n = numbers.length;
    const result = Array(n).fill(-1); // 결과를 저장할 배열을 -1로 초기화
    const stack = []; // 스택을 사용하여 인덱스를 저장

    for (let i = 0; i < n; i++) {
        // 스택이 비어있지 않고 현재 숫자가 스택의 가장 위 인덱스의 숫자보다 큰 경우
        while (stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]]) {
            const index = stack.pop(); // 스택에서 인덱스를 꺼내고
            result[index] = numbers[i]; // 해당 인덱스의 결과를 현재 숫자로 업데이트
        }
        stack.push(i); // 현재 인덱스를 스택에 추가
    }

    return result;
};

console.log("result:: ", solution([2, 3, 3, 5])); // [3, 5, 5, -1]
console.log("result:: ", solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]
