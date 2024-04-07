// URL >

const solution = (n, t, m, p) => {
    // 1. result.length === t > break;
    // 2. n > 진법
    // 3, m > 참가인원
    // 4. p > 내 순서

    let saveString = ''
    let number = 0
    // 최소한 t*m보다 긴 saveString 생성
    while(t*m > saveString.length){
        saveString = saveString.concat(number.toString(n))
        number++
    }

    // 필요한 t*m 길이만큼 slice
    saveString  = saveString.slice(0,t*m)

    // p번째 순서에 대해서만 filter 처리 후 대문자 처리
    const answer = saveString.split('').filter((num,idx)=>{
        return ((idx-p+1) % m )===0
    }).join('').toUpperCase()

    return answer;

};


console.log("result:: ", solution(2, 4, 2, 1)); // "0111"
// console.log("result:: ", solution(16, 16, 2, 1)); // "02468ACE11111111"
// console.log("result:: ", solution(16, 16, 2, 2)); //"13579BDF01234567"
