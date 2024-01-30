// URL > https://leetcode.com/problems/single-number/
// RUN-TIME >
// Memory >
const solution = (s, numRows) => {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    const result = Array.from({length: numRows}, () => []);

    let direction = 1; // 1 represents going down, -1 represents going up
    let row = 0;

    for (let i = 0; i < s.length; i++) {
        result[row].push(s[i]);
        row += direction;

        if (row === 0 || row === numRows - 1) {
            direction *= -1;
        }

    }

    return result.flat().join("");

};

const result = solution("PAYPALISHIRING", 3);
console.log("result:: ", result);
///

/**
 * ```

 * ```
 * */