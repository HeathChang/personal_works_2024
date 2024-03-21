// URL > https://school.programmers.co.kr/learn/courses/30/lessons/133499

const solution = (babbling) => {
    const ableBabblingArray = [ "aya", "ye", "woo", "ma" ];
    for (let i = 0; i < babbling.length; i++) {
        for( let j = 0; j < ableBabblingArray.length ; j ++){
            if(babbling[i].includes(ableBabblingArray[j].repeat(2))) {
                break;
            }
            babbling[i] = babbling[i].split(ableBabblingArray[j]).join('!');

        }
    }
    return babbling.filter(e => {
        return /(^!+$)/.test(e)
    }).length;
};

// console.log("result:: ", solution([ "aya", "yee", "u", "maa" ])); // 1
console.log("result:: ", solution([ "ayaye", "uuu", "yeye", "yemawoo", "ayaayaa" ])); // 2
