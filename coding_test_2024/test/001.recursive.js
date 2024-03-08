// URL > DFS를 위한 재귀함수
const factorial = (n) => {
    let result = 0;
    const fnAdd = (n) => {
        // 종료 조건
        if(n === 1) return 1;
        return n + fnAdd(n-1)
    }
    result = fnAdd(n)
    return result
};
console.log("result: ", factorial(10))
