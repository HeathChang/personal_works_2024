// URL > https://leetcode.com/problems/different-ways-to-add-parentheses/description

/**
 * @param {string} expression
 * @return {number[]}
 */
const solution = (expression) => {
    // 메모이제이션을 위한 Map
    const memo = new Map();
    
    const calculate = (expr) => {
        if (memo.has(expr)) {
            return memo.get(expr);
        }
        
        const result = [];
        
        // 수식이 숫자만 있는지 확인
        if (!expr.includes('+') && !expr.includes('-') && !expr.includes('*')) {
            result.push(parseInt(expr));
            memo.set(expr, result);
            return result;
        }
        
        // 각 연산자 위치에서 수식을 분할
        for (let i = 0; i < expr.length; i++) {
            const char = expr[i];
            
            if (char === '+' || char === '-' || char === '*') {
                // 연산자 기준으로 왼쪽과 오른쪽으로 분할
                const leftExpr = expr.substring(0, i);
                const rightExpr = expr.substring(i + 1);
                
                // 왼쪽과 오른쪽 부분의 모든 가능한 결과 계산
                const leftResults = calculate(leftExpr);
                const rightResults = calculate(rightExpr);
                
                // 모든 조합에 대해 연산 수행
                for (const left of leftResults) {
                    for (const right of rightResults) {
                        if (char === '+') {
                            result.push(left + right);
                        } else if (char === '-') {
                            result.push(left - right);
                        } else if (char === '*') {
                            result.push(left * right);
                        }
                    }
                }
            }
        }
        
        memo.set(expr, result);
        return result;
    };
    
    return calculate(expression);
};

// 테스트 케이스
console.log("result:: ", solution("2-1-1")); // [0, 2]
