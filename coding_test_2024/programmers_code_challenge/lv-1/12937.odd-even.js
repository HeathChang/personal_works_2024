// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12937


const solution = (num) => {
    if (num < 0) num = Math.abs(num)
    if(num % 2 === 0 ) return 'Even';
    else if(num % 2 === 1 ) return 'Odd';
};

const result = solution(-1);
console.log("result:: ", result);
