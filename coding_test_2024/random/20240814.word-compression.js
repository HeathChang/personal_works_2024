```
문제 설명:
주어진 문자열 s를 압축하여 압축된 문자열을 반환하는 함수를 작성하세요. 압축은 동일한 문자가 연속적으로 나타나는 경우 해당 문자의 개수를 함께 저장하여 문자열을 축약하는 방식입니다. 만약 압축된 문자열이 원래 문자열보다 길거나 같으면, 원래 문자열을 반환합니다.

압축 방식:
같은 문자가 k번 연속으로 나타나면, 그 부분을 문자(k)로 압축합니다.
예를 들어, 문자열 "aabcccccaaa"는 압축하면 "a2b1c5a3"이 됩니다.

입력:
s (1 <= s.length <= 1000): 압축할 문자열입니다. 문자열은 알파벳 소문자와 대문자로만 구성됩니다.

출력:
압축된 문자열을 반환합니다. 압축된 문자열이 원래 문자열보다 길거나 같으면 원래 문자열을 반환합니다.

제한사항:
문자열의 길이는 1 이상 1000 이하입니다.
```
const solution = (s) => {
    let compressed = '';
    let count = 1;

    // 문자열을 순회하며 압축
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            compressed += s[i - 1] + (count > 1 ? count : '');
            count = 1;
        }
    }

    // 마지막 문자와 개수 추가
    compressed += s[s.length - 1] + (count > 1 ? count : '');

    // 압축된 문자열이 원본보다 길면 원본 문자열 반환
    return compressed.length < s.length ? compressed : s;
};

console.log("result:: ", solution('aabcccccaaa')); // a2bc5a3
console.log("result:: ", solution('abcdef')); // abcdef
console.log("result:: ", solution('aaabbbccc')); // a3b3c3
