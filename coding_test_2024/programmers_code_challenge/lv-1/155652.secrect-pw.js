// URL > https://school.programmers.co.kr/learn/courses/30/lessons/155652

const solution = (s, skip, index) => {
    let temp = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
    let alphabetArr = temp.concat(temp).concat(temp)
    let sArr = s.split("");
    let skipArr = skip.split("");
    let result = "";
    for (let i = 0; i < sArr.length; i++) {
        let count = 0;
        let j = 1
        const tempIndex = alphabetArr.indexOf(sArr[i]);

        while(count !== index){
            const tempAlphabet = alphabetArr[tempIndex + j];
            if(!skipArr.includes(tempAlphabet)){
                count += 1;
            }
            j += 1;
            if(count === index) result += tempAlphabet

        }
    }
    return result
};

console.log("result:: ", solution("aukks", "wbqd", 5));
