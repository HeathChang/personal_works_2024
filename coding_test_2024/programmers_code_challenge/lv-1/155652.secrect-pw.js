// URL > https://school.programmers.co.kr/learn/courses/30/lessons/155652

const solution = (s, skip, index) => {
    let alphabetArr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
    let sArr = s.split("");
    let skipArr = skip.split("");

    for (let i = 0; i < sArr.length; i++) {
        const tempIndex = alphabetArr.indexOf(sArr[i]);
        for(let i = 1 ; i <= index ; i++){
            
        }
    }
};

console.log("result:: ", solution("aukks", "wbqd", 5));
