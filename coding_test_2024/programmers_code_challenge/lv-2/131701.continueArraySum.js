// URL > https://school.programmers.co.kr/learn/courses/30/lessons/131701

const solution = (elements) => {
    const n = elements.length;
    const extendedElements = elements.concat(elements);
    const uniqueSums = new Set();

    for (let length = 1; length <= n; length++) {
        for (let start = 0; start < n; start++) {
            let sum = 0;
            for (let k = 0; k < length; k++) {
                sum += extendedElements[start + k];
            }
            uniqueSums.add(sum);
        }
    }

    return uniqueSums.size;


};

console.log("result:: ", solution([7, 9, 1, 1, 4])); //18
