// URL > https://school.programmers.co.kr/learn/courses/30/lessons/12930

const solution = (n) => {
   return n.split(' ').map(word => word.split('').map((char,idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')).join(' ')
};

const result = solution("try hello world");
console.log("result:: ", result);
