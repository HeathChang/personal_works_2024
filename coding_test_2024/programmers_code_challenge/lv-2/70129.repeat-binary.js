// URL > https://school.programmers.co.kr/learn/courses/30/lessons/70129

const solution = (s) => {
    let val = `${s}`;
    let count = 0;
    let outerCount = 0;
    while(val !== '1'){
        `${val}`.split('').forEach(item => {
            if(+item === 0){
                console.log(1)
                count+=1;
            } else {
                val += '1';
            }


            outerCount+=1;
        })

        val = '';
    }
    return [outerCount, count]
};

console.log("result:: ", solution('110010101001')); // [3,8]
// console.log("result:: ", solution(01110)); //[3,3]
// console.log("result:: ", solution(1111111)); //[4,1]
