```
* 슬라이딩 윈도우(Sliding Window) 알고리즘은
> 배열이나 리스트의 요소의 일정 범위의 값을 비교할때 사용하면 유용한 알고리즘.
> 매번 처리되는 중복된 요소를 버리지 않고 재사용함으로써 낭비되는 계산을 하지 않음으로써 효율적으로 처리.
> 연속된 구간(윈도우)을 유지하며 조건 만족하는 구간 탐색이라는점에서 정렬배열에서 쌍/조합찾는 투포인터와 차이
```

```js
const slidingWindowTemplate = (s) => {
    let left = 0;
    let right = 0;

    while (right < s.length) {
        // Expand the window by moving right
        // Do something with s[right]

        right++;

        // While the window is invalid, shrink it from the left
        while (/* window is invalid */) {
            // Do something to remove s[left] from the window
            left++;
        }

        // Optionally update the result
        // result = Math.max(result, right - left);
    }

    return /* result */;
}
```



```js
function slidingWindowTemplate(s) {
	let left = 0;
	let right = 0;
	const seen = new Set();
	let maxLength = 0;

	while (right < s.length) {
		const char = s[right];

		while (seen.has(char)) {
			seen.delete(s[left]);
			left++;
		}

		seen.add(char);
		maxLength = Math.max(maxLength, right - left + 1);
		right++;
	}

	return maxLength;
}
console.log("result:: ", slidingWindowTemplate("abcabcbb"));
```


