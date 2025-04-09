// URL > https://leetcode.com/problems/first-unique-character-in-a-string/?envType=problem-list-v2&envId=string

const solution = (s) => {
    // First: FAILED
	// for (let i = 0; i < s.length; i++) {
    //     for( let j = i + 1 ; j < s.length ; j ++){
    //         console.log(i,j, s[i],s[j])
    //         if(s[i] === s[j]) break;
    //         if(s[i] !== s[j] && j === s.length-1) return i
    //     }
	// }
    // return -1

    // Second: SUCCESS
    const a =  new Map();
    const sSplit = s.split("")
    sSplit.forEach(item => a.set(item, (a.get(item) || 0) + 1))
    for(const [key, value] of a){
        if(value === 1) return sSplit.findIndex(item => item === key)
    }
    return -1
};

console.log("result:: ", solution("leetcode"));
console.log("result:: ", solution("loveleetcode"));
console.log("result:: ", solution("aabb"));
