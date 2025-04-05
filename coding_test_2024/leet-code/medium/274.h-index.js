// URL > https://leetcode.com/problems/h-index/?envType=study-plan-v2&envId=top-interview-150

const solution = (citations) => {
    citations.sort((a,b) => a - b);

    for(let i = 0 ; i < citations.length ; i++){
        if(citations[i] >= citations.length - i) return citations.length - i
    }
    return 0;

};

console.log("result:: ", solution([3,0,6,1,5])); // 3
console.log("result:: ", solution([1,3,1])); // 1