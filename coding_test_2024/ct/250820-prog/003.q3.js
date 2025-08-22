// URL >

const solution = (phone_number) => {
    const type1 = /^010-\d{4}-\d{4}$/
    const type2 = /^01\d{9}$/
    const type3 = /^\+82-10-\d{4}-\d{4}$/

    if(type1.test(phone_number)) return 1;
    else if (type2.test(phone_number)) return 2;
    else if (type3.test(phone_number)) return 3;
    else return -1
};

console.log("result:: ", solution("01012345678")); // 2
console.log("result:: ", solution("010-1212-333")); // -1
console.log("result:: ", solution("+82-10-3434-2323")); // 3
console.log("result:: ", solution("+82-010-3434-2323")); // -1
