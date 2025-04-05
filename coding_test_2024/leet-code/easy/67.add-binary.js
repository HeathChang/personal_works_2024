// URL > https://leetcode.com/problems/add-binary/

const solution = (a,b) => {
    // First Attempt
    // const intA = parseInt(a,2);
    // const intB = parseInt(b,2);
    // return (intA + intB).toString(2);

    // Second Attempt
    let carry = 0;
    let result = "";
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        let bitA = i >= 0 ? Number(a[i]) : 0;
        let bitB = j >= 0 ? Number(b[j]) : 0;
        let sum = bitA + bitB + carry;

        if (sum >= 2) {
            carry = 1;
            result = (sum % 2) + result;
        } else {
            carry = 0;
            result = sum + result;
        }

        i--;
        j--;
    }

    return result;
};

console.log("result:: ", solution("11", "1"));
