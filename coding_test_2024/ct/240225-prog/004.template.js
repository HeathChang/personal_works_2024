// URL >

const solution = (n) => {
    const now = new Date() // 시간 카운트
    let lim = 0;
    const countBits = (s, flag) => {
        let count = 0;
        while (s) {
            count += s & 1;
            s >>= 1;
            if (flag !== true && count > lim) return false;
        }
        if (flag) lim = count;
        return count;
    };

    const tempCount = countBits(n, true); //2
    // const tempCount = countBits(n); //2
    let answer = 0;
    for (let i = 0; i < n; i++) {
        const res = countBits(i, false);
        if (!res) continue;
        if (res !== tempCount) continue;
        answer++;
    }
    console.log((new Date()- now)/1000); // 시간 카운트
    return answer;
};

console.log("result:: ", solution(Math.pow(2, 30)));
// console.log("result:: ", solution(9));
