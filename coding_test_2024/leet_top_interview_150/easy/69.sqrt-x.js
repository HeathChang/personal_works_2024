// URL > https://leetcode.com/problems/sqrtx/

const solution = (nums) => {
    if (x === 0) return 0;

    let left = 1, right = x, result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
        else if (mid * mid < x) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};

console.log("result:: ", solution(4)); // 2
console.log("result:: ", solution(8)); // 2
