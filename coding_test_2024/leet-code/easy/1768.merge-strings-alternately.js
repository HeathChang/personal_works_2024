// URL: https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

const solution = ( word1, word2, type = 1 ) => {
    // first Attempt:: 39ms, 53mb
    if (type === 1) {
        // first Attempt:: 39ms, 53mb
        let returnString = "";
        let getSmaller = Math.min(word1.length, word2.length) === word1.length ? word1 : word2;
        let getBigger = Math.min(word1.length, word2.length) === word1.length ? word2 : word1;

        for (let i = 0; i < getSmaller.length; i++) {
            returnString += word1[i] + word2[i];
            if (i === getSmaller.length - 1 && getSmaller.length !== getBigger.length) {
                returnString += getBigger.substring(i + 1);
            }
        }
        return returnString;
    }
    // second Attempt: 39ms, 51mb
    else if (type === 2) {
        // second Attempt: 39ms, 51mb
        let returnString = "";
        let getSmaller = Math.min(word1.length, word2.length);

        for (let i = 0; i < getSmaller; i++) {
            returnString += word1[i] + word2[i];
        }

        return returnString + word1.substring(getSmaller) + word2.substring(getSmaller);
    }
};

console.log(solution("abc", "pqr")); // a p b q c r
console.log(solution("ab", "pqrs")); // a p b q   r   s
console.log(solution("abcd", "pq")); // a p b q   r   s