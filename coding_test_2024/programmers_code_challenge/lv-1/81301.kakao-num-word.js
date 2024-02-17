// URL > https://school.programmers.co.kr/learn/courses/30/lessons/81301

const solution = (n) => {
    if (!isNaN(+n)) return +n;
    const arr = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    for(let i = 0 ; i < arr.length ; i++){
        n = n.split(arr[i]).join(i);
        if (!isNaN(+n)) return +n;
    }
    return +n;
};

// const result = solution("one4seveneight");
const result = solution("oneoneone");
console.log("result:: ", result);
