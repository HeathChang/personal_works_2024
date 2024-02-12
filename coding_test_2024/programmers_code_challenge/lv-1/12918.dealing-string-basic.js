// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12918

const solution = (n) => {
    // 내풀이
    if (n.length !== 4 && n.length !== 6) return false;
    let ans = true;
    n.split("").forEach(item => {
        if (isNaN(+item.toString())) {
            ans = false;
        }
    });
    return ans;
};

const result = solution("11233");
console.log("result:: ", result);
