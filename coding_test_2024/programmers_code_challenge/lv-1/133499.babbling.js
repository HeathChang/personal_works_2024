// URL >

const solution = (babbling) => {
    const ableBabblingArray = [ "aya", "ye", "woo", "ma" ];
    for (let i = 0; i < babbling.length; i++) {
        for( let j = 0; j < ableBabblingArray.length ; j ++){
            console.log(ableBabblingArray[j], babbling[i].indexOf(ableBabblingArray[j]))
            // let sliceRes = babbling[i].slice(0, babbling[i].indexOf(ableBabblingArray[j]))
            // console.log(1, sliceRes)
        }
    }
};

console.log("result:: ", solution([ "aya", "yee", "u", "maa" ])); // 1
// console.log("result:: ", solution([ "ayaye", "uuu", "yeye", "yemawoo", "ayaayaa" ])); // 2
