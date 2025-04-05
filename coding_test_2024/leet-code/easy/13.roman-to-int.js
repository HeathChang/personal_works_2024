// URL > https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (s) => {
    // Map of Roman numerals to integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    // Loop through the string
    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        // If the current value is less than the next value, subtract it
        if (nextVal && currentVal < nextVal) {
            total -= currentVal;
        } else {
            // Otherwise, add it to the total
            total += currentVal;
        }
    }

    return total;
};

console.log("result:: ", solution("III"));
