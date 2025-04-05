// URL > https://leetcode.com/problems/contains-duplicate/

const solution = (nums) => {
    let seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }

    return false;
};

console.log("result:: ", solution([1,2,3,1]));
