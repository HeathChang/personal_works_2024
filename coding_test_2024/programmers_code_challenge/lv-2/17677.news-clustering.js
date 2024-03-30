// URL > https://school.programmers.co.kr/learn/courses/30/lessons/17677

const solution = (str1, str2) => {
    let result = 0;
    let min = 0;
    let max = 0;
    const newsClustering = (str) => {
        let temp = [];
        let strSplit = str.split("");
        for (let i = 0; i < strSplit.length - 1; i++) {
            let str = strSplit[i] + strSplit[i + 1];
            if (/^[A-Z]+$/.test(str)) {
                temp.push(str);
            }
        }
        return temp;

    };

    str1 = newsClustering(str1.toUpperCase());
    str2 = newsClustering(str2.toUpperCase());


    let set = new Set([ ...str1, ...str2 ]);
    console.log("set::: ", set);

    set.forEach(item => {
        const temp1 = str1.filter(i => i === item);
        const temp2 = str2.filter(i => i === item);
        min += Math.min(temp1.length, temp2.length);
        max += Math.max(temp1.length, temp2.length);
    });

    // 공집합인 경우
    if (min === 0 && max === 0) {
        return 65536;
    }

    result = Math.floor(min / max * 65536);

    return result;

};


console.log("result:: ", solution("FRANCE", "french")); //16384
console.log("result:: ", solution("handshake", "shake hands")); //65536
console.log("result:: ", solution("aa1+aa2", "AAAA12")); //43690
console.log("result:: ", solution("E=M*C^2", "E=M*C^2")); //65536
